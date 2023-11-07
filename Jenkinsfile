def detectJavaVersion() {
  def javaVersionOutput = sh(script: 'java -version 2>&1', returnStatus: false, returnStdout: true).trim()
  def javaVersionMatch = javaVersionOutput = ~/openjdk version "(\d+\.\d+)/

  if (javaVersionMatch) {
    def javaVersion = javaVersionMatch[0][1]

    if (javaVersion.startsWith("1.8")) {
      return '8'
    } else if (javaVersion.startsWith("11")) {
      return '11'
    } else if (javaVersion.startsWith("17")) {
      return '17'
    } else {
      error("Unsupported Java version detected: ${javaVersion}")
    }
  } else {
    error("Java version information not found in output.")
  }
}

def pipelineError = false

pipeline {
  agent any
  environment {
    GIT_BRANCH = 'main'
    GIT_URL = 'https://gitlab.com/ganesharavind124/AnaCart.git'
    SONARCLOUD = 'Sonarcloud'
    SNYK_INSTALLATION = 'snyk@latest'
    SNYK_TOKEN = 'Snyk'
    DOCKER_REGISTRY_CREDENTIALS = 'Docker_Server'
    DOCKER_IMAGE = 'ganesharavind124/anacart:latest'
    DOCKER_TOOL = 'Docker'
    DOCKER_URL = 'https://index.docker.io/v1/'
    KUBE_CONFIG = 'kubernetes'
  }
  stages {
    stage('Clean Workspace') {
      steps {
        cleanWs()
      }
    }
    stage('Git-Checkout') {
      steps {
        script {
          git branch: env.GIT_BRANCH, url: env.GIT_URL
        }
      }
    }
    stage('Compile and Run Sonar Analysis') {
      steps {
        script {
          withSonarQubeEnv(SONARCLOUD) {
            try {
              if (fileExists('pom.xml')) {
                sh 'mvn clean verify sonar:sonar'
              } else if (fileExists('package.json')) {
                sh '/opt/sonar-scanner-5.0.1.3006-linux/bin/sonar-scanner'
              } else if (fileExists('go.mod')) {
                sh '/opt/sonar-scanner-5.0.1.3006-linux/bin/sonar-scanner'
              } else if (fileExists('Gemfile')) {
                sh '/opt/sonar-scanner-5.0.1.3006-linux/bin/sonar-scanner'
              } else if (fileExists('requirements.txt')) {
                sh '/opt/sonar-scanner-5.0.1.3006-linux/bin/sonar-scanner'
              } else {
                currentBuild.result = 'FAILURE'
                pipelineError = true
                error("Unsupported application type: No compatible build steps available.")
              }
            } catch (Exception e) {
              currentBuild.result = 'FAILURE'
              pipelineError = true
              error("Error during Sonar analysis: ${e.message}")
            }
          }
        }
      }
    }
    stage('snyk_analysis') {
      steps {
        script {
          echo 'Testing...'
          try {
            snykSecurity(
              snykInstallation: SNYK_INSTALLATION,
              snykTokenId: SNYK_TOKEN,
              failOnIssues: false,
              monitorProjectOnBuild: true,
              additionalArguments: '--all-projects --d'
            )
          } catch (Exception e) {
            currentBuild.result = 'FAILURE'
            pipelineError = true
            error("Error during snyk_analysis: ${e.message}")
          }
        }
      }
    }
    stage('Detect and Set Java') {
      steps {
        script {
          try {
            def javaVersion = detectJavaVersion()
            tool name: "Java_${javaVersion}", type: 'jdk'
            sh 'java --version'
          } catch (Exception e) {
            currentBuild.result = 'FAILURE'
            pipelineError = true
            error("Error during Java version detection: ${e.message}")
          }
        }
      }
    }
    stage('Frontend Build and Test') {
      steps {
        script {
          try {
            if (fileExists('package.json')) {
              sh 'npm install --force'
              //sh 'npm test'
            } else {
              echo 'No package.json found, skipping Frontend build and test.'
            }
          } catch (Exception e) {
            currentBuild.result = 'FAILURE'
            pipelineError = true
            error("Error during Frontend build and test: ${e.message}")
          }
        }
      }
    }
    stage('Java Spring Boot Build and Test') {
      steps {
        script {
          try {
            if (fileExists('pom.xml')) {
              sh 'mvn clean package'
              sh 'mvn test'
            } else {
              // If pom.xml doesn't exist, print a message and continue
              echo 'No pom.xml found, skipping Java Spring Boot build and test.'
            }
          } catch (Exception e) {
            currentBuild.result = 'FAILURE'
            error("Error during Java Spring Boot build and test: ${e.message}")
          }
        }
      }
    }

    stage('.NET Build and Test') {
      steps {
        script {
          try {
            if (fileExists('YourSolution.sln')) {
              sh 'dotnet build'
              sh 'dotnet test'
            } else {
              // If YourSolution.sln doesn't exist, print a message and continue
              echo 'No YourSolution.sln found, skipping .NET build and test.'
            }
          } catch (Exception e) {
            currentBuild.result = 'FAILURE'
            error("Error during .NET build and test: ${e.message}")
          }
        }
      }
    }
    stage('PHP Build and Test') {
      steps {
        script {
          try {
            if (fileExists('composer.json')) {
              sh 'composer install'
              sh 'phpunit'
            } else {
              // If composer.json doesn't exist, print a message and continue	
              echo 'No composer.json found, skipping PHP build and test.'
            }
          } catch (Exception e) {
            currentBuild.result = 'FAILURE'
            error("Error during PHP build and test: ${e.message}")
          }
        }
      }
    }
    stage('iOS Build and Test') {
      steps {
        script {
          try {
            if (fileExists('YourProject.xcodeproj')) {
              xcodebuild(buildDir: 'build', scheme: 'YourScheme')
            } else {
              // If YourProject.xcodeproj doesn't exist, print a message and continue
              echo 'No YourProject.xcodeproj found, skipping iOS build and test.'
            }
          } catch (Exception e) {
            currentBuild.result = 'FAILURE'
            error("Error during iOS build and test: ${e.message}")
          }
        }
      }
    }
    stage('Android Build and Test') {
      steps {
        script {
          try {
            if (fileExists('build.gradle')) {
              sh './gradlew build'
              sh './gradlew test'
            } else {
              // If build.gradle doesn't exist, print a message and continue
              echo 'No build.gradle found, skipping Android build and test.'
            }
          } catch (Exception e) {
            currentBuild.result = 'FAILURE'
            error("Error during Android build and test: ${e.message}")
          }
        }
      }
    }
    stage('Ruby on Rails Build and Test') {
      steps {
        script {
          try {
            // Check if Gemfile.lock exists
            if (fileExists('Gemfile.lock')) {
              sh 'bundle install' // Install Ruby gem dependencies
              sh 'bundle exec rake db:migrate' // Run database migrations
              sh 'bundle exec rails test' // Run Rails tests (adjust as needed)
            } else {
              // If Gemfile.lock doesn't exist, print a message and continue
              echo 'No Gemfile.lock found, skipping Ruby on Rails build and test.'
            }
          } catch (Exception e) {
            currentBuild.result = 'FAILURE'
            error("Error during Ruby on Rails build and test: ${e.message}")
          }
        }
      }
    }
    stage('Flask Build and Test') { // To build and run a Python Flask Framework Application
      steps {
        script {
          try {
            if (fileExists('app.py')) {
              sh 'pip install -r requirements.txt' // Install dependencies
              sh 'python -m unittest discover' // Run Flask unit tests
            } else {
              // If app.py doesn't exist, print a message and continue
              echo 'No app.py found, skipping Flask build and test.'
            }
          } catch (Exception e) {
            currentBuild.result = 'FAILURE'
            error("Error during Flask build and test: ${e.message}")
          }
        }
      }
    }
    stage('Django Build and Test') { // To build and run a Python Django Framework Application
      steps {
        script {
          try {
            if (fileExists('manage.py')) {
              sh 'pip install -r requirements.txt' // Install dependencies
              sh 'python manage.py migrate' // Run Django migrations
              sh 'python manage.py test' // Run Django tests
            } else {
              // If manage.py doesn't exist, print a message and continue
              echo 'No manage.py found, skipping Django build and test.'
            }
          } catch (Exception e) {
            currentBuild.result = 'FAILURE'
            error("Error during Django build and test: ${e.message}")
          }
        }
      }
    }
    stage('Rust Build and Test') { //To build and run a Rust Application
      steps {
        script {
          try {
            if (fileExists('Cargo.toml')) { // Check if Cargo.toml file exists 
              env.RUST_BACKTRACE = 'full' // Set the RUST_BACKTRACE environment variable to full for better error messages
              sh 'cargo build' // Build the Rust project
              sh 'cargo test' // Run the Rust tests
            } else {
              // If Cargo.toml doesn't exist, print a message and continue
              echo "No Cargo.toml file found. Skipping Rust build and test."
            }
          } catch (Exception e) {
            // Set the build result to FAILURE and print an error message
            currentBuild.result = 'FAILURE'
            error("Error during Rust build and test: ${e.message}")
          }
        }

      }
    }
    stage('Ruby Sinatra Build and Test') { //To build and run a Ruby Application
      steps {
        script {
          try {
            if (fileExists('app.rb')) { // Check if app.rb file exists                 
              sh 'gem install bundler' // Install Bundler
              sh 'bundle install' // Use bundle exec to ensure gem dependencies are isolated        
              sh 'bundle exec rake test' // Run the Sinatra tests using Rake
            } else {
              // If app.rb doesn't exist, print a message and continue
              echo "No app.rb file found. Skipping Ruby Sinatra build and test."
            }
          } catch (Exception e) {
            // Set the build result to FAILURE and print an error message
            currentBuild.result = 'FAILURE'
            error("Error during Ruby Sinatra build and test: ${e.message}")
          }
        }
      }
    }
    stage('Build Docker Image') {
      steps {
        script {
          try {
            if (fileExists('Dockerfile')) {
              def dockerImage = docker.build(DOCKER_IMAGE, ".")
            } else {
              error("Dockerfile not found. Cannot build Docker image.")
              currentBuild.result = 'FAILURE'
              pipelineError = true
            }
          } catch (Exception e) {
            currentBuild.result = 'FAILURE'
            pipelineError = true
            error("Error during Docker image build: ${e.message}")
          }
        }
      }
    }
    stage('Trivy Scan') {
      steps {
        script {
          def imageName = DOCKER_IMAGE
          sh "trivy image --format table ${imageName}"
        }
      }
    }
    stage('Push Docker Image') {
      steps {
        script {
          try {
            withDockerRegistry(credentialsId: DOCKER_REGISTRY_CREDENTIALS, toolName: DOCKER_TOOL, url: DOCKER_URL) {
              def dockerImage = docker.image(DOCKER_IMAGE)
              dockerImage.push()
            }
          } catch (Exception e) {
            currentBuild.result = 'FAILURE'
            pipelineError = true
            echo "Error during Docker image push: ${e.message}"
          }
        }
      }
    }
    stage('Kubernetes Deployment') {
      steps {
        script {
          def configFile = 'deployment.yaml'
          if (fileExists(configFile)) {
            kubernetesDeploy(configs: configFile, kubeconfigId: KUBE_CONFIG)
          } else {
            error("Error: $configFile does not exist")
            currentBuild.result = 'FAILURE'
            pipelineError = true
          }
        }
      }
    }
    stage('Run DAST Using ZAP') {
      steps {
        script {
          try {
            def targetURL = "http://192.168.49.2:32767/" // Replace with your actual target URL
            def zapCommand = "zaproxy -cmd -quickurl ${targetURL}"
            sh(zapCommand)
            archiveArtifacts artifacts: 'zap_report.html'
          } catch (Exception e) {
            currentBuild.result = 'FAILURE'
            error("Error during ZAP DAST: ${e.message}")
          }
        }
      }
    }
  }
}

post {
  always {
    if (pipelineError) {
      currentBuild.result = 'FAILURE'
    }
  }
}
