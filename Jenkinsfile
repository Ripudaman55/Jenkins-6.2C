pipeline {
    agent any
    
    environment {
        
        NODEJS_HOME = tool 'NodeJS'
    }
    tools {
        
        nodejs 'NodeJS'
        
    }
    stages {
        
        stage('Checkout') {
            steps {
                //checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: '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', url: 'https://github.com/Ripudaman55/Jenkins-6.2C.git']])
                echo 'CHECKOUT DONE'
            }
        }

        stage('Build') {
            steps {
                echo 'Performing this build stage for building the project using <Maven>'
            }
        }
        stage('Unit and Integration Tests')
        {
            steps
            {
                echo 'Performing this test stage for testing the project using <Jest>' 
                echo 'With Integration Testing Tools I will use Selenium'
            }
             post {
                success {
                    mail to: 'ripudamanthind@gmail.com',
                        subject: 'Unit and Integration Tests Success',
                        body: 'The unit and integration tests have succeeded. Find attached logs for more information.'
                        //attachLog: true
                }
                failure {
                    mail to: 'ripudamanthind@gmail.com',
                        subject: 'Unit and Integration Tests Failed',
                        body: 'The unit and integration tests have failed. Find attached logs for more information.'
                       // attachLog: true
                }
                 
             }
        }

        
    
        stage('Code Analysis')
        {
            steps{
                echo 'Static Code Analysis Tools using SonarQube '
                echo 'Code Review Tools using GitHub Actions '
            }
            
        }
        stage('Security Scan')
        {
            steps{
                echo 'Security Scanning Tools stage using OWASP ZAP'
            }
             post {
                success {
                    mail to: 'ripudamanthind@gmail.com',
                        subject: 'Security Scan Tests Success',
                        body: 'The Security Scan have succeeded. Find attached logs for more information.'
                       // attachLog: true
                }
                failure {
                    mail to: 'ripudamanthind@gmail.com',
                        subject: 'Security Scan Tests Failed',
                        body: 'The Security Scan  tests have failed. Find attached logs for more information.'
                 //       attachLog: true
                }
                 
             }

        }
        stage('Deploy to Staging')
        {
            steps{
                echo 'Deployment Automation Tools stage using Netflify'
            }
            
        }
        stage('Integration Tests on Staging')
        {
            steps{
                echo 'Testing Frameworks using Selenium'
                echo 'Load Testing Tools using Apache JMeter'
            }
            
        }
        stage('Deploy to Production')
        {
            steps{
                echo 'Deployment Automation Tools using Netlify'
                echo 'Container Orchestration Platforms using Docker Swarm'
            }
            
        }
   
    }
    
    post {
        success {
            echo 'Build successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
