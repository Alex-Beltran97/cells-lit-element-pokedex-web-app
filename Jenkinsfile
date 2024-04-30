#!groovy

@Library("workflowlibs") _

pipeline {

    options {
        ansiColor colorMapName: 'XTerm'
        timestamps()
    }

    agent none

    stages {

        stage('Checkout Global Library') {

            steps {

                script{

                    globalBootstrap {

                        libraryName   = "cellsworkflowlibs"
                        libraryBranch = "master"

                        entrypointParams = [
                            type            : "cellsApp",
                            buildConfigs    : [config1:[config:'dev.js', build:'novulcanize']],
                            deployS3        : true
                        ]
                    }
                }
            }
        }
    }
}