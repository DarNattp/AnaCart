pipeline {
    agent any
    environment {
        SONARCLOUD = 'Sonarcloud' // Name of your SonarQube environment in Jenkins
        SNYK_INSTALLATION = 'snyk@latest' // Snyk installation name
        SNYK_TOKEN = 'Snyk' // Jenkins credentials ID for your Snyk token
        DOCKER_REGISTRY_CREDENTIALS = 'Docker_Server' // Replace 'Docker_Server' with the actual credential ID
        DOCKER_IMAGE_NAME = 'ganesharavind124/maven:latest'
        DOCKER_TOOL_NAME = 'Docker'
        DOCKER_URL = 'https://index.docker.io/v1/'
        KUBE_CONFIG = 'kubernetes' // You need to configure this in Jenkins
    }
    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }
        stage('Git-Checkout') {
            steps {
                git branch: 'main', url: 'https://gitlab.com/ganesharavind124/nodejs.git'
            }
        }
        stage('Compile and Run Sonar Analysis') {
            steps {
                script {
                    withSonarQubeEnv(SONARCLOUD) {
                        try {
                            if (fileExists('pom.xml')) { 
                                sh 'mvn clean verify sonar:sonar' // Run SonarCloud analysis for Maven application	
                            } else if (fileExists('package.json')) { 
                                sh '/opt/sonar-scanner/bin/sonar-scanner' // Use the full path to SonarScanner
                            } else if (fileExists('go.mod')) {
                                sh '/opt/sonar-scanner/bin/sonar-scanner' // Use the full path to SonarScanner
                            } else if (fileExists('Gemfile')) {
                                sh '/opt/sonar-scanner/bin/sonar-scanner' // Use the full path to SonarScanner
                            } else if (fileExists('requirements.txt')) {
                                sh '/opt/sonar-scanner/bin/sonar-scanner' // Use the full path to SonarScanner
                            } else {
                                currentBuild.result = 'FAILURE'
                                error("Unsupported application type: No compatible build steps available.")
                            }
                        } catch (Exception e) {
                            currentBuild.result = 'FAILURE'
                            error("Error during Sonar analysis: ${e.message}")
                        }
                    }
                }
            }
        }
        stage('snyk_analysis') {
            steps {
                echo 'Testing...'
                snykSecurity(
                    snykInstallation: SNYK_INSTALLATION, //add your installation Name 
                    snykTokenId: SNYK_TOKEN, //Add your own Snyk Token
                    failOnIssues: false,
                    monitorProjectOnBuild: true,
                    additionalArguments: '--all-projects --d'
                )
            }
        }
        stage('Frontend Build and Test') {
            steps {
                script {
                    try {
                        if (fileExists('package.json')) {
                            sh 'npm install --force'
                            // sh 'npm run build'
                        } else {
                            // If package.json doesn't exist, print a message and continue
                            echo 'No package.json found, skipping Frontend build and test.'
                        }
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        error("Error during Frontend build and test: ${e.message}")
                    }
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    try {
                        if (fileExists('dockerfile')) {
                            // Build Docker image
                            def dockerImage = docker.build(DOCKER_IMAGE_NAME, ".")
                        } else {
                            error("Dockerfile not found. Cannot build Docker image.")
                            currentBuild.result = 'FAILURE'
                        }
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        error("Error during Docker image build: ${e.message}")
                    }
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    try {
                        // Push Docker image
                        withDockerRegistry(credentialsId: DOCKER_REGISTRY_CREDENTIALS, toolName: DOCKER_TOOL_NAME, url: DOCKER_URL) {
                            def dockerImage = docker.image(DOCKER_IMAGE_NAME)
                            dockerImage.push()
                        }
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        echo "Error during Docker image push: ${e.message}"  // Display a generic error message
                    }
                }
            }
        }
            stage('Kubernetes Deployment') {
                steps {
                    script {
                        def configFile = 'deploymentservice.yml'
                        if (fileExists(configFile)) {
                            kubernetesDeploy(configs: configFile, kubeconfigId: KUBE_CONFIG)
                        } else {
                            error("Error: $configFile does not exist")
                        }
                    }
                }
            }

    }
}
