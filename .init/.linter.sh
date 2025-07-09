#!/bin/bash
cd /home/kavia/workspace/code-generation/sp-500-financial-indicators-dashboard-194a7a31/sp500_ai_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

