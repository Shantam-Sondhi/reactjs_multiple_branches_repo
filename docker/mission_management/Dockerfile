FROM 768610196498.dkr.ecr.us-east-1.amazonaws.com/alu:node-16-16-0-alpine-3.15 
RUN apk add python3 make g++ && rm -rf /var/cache/apk/*
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
#common files and folders
COPY apps/.babelrc ./apps/.babelrc
COPY apps/.eslintrc.json ./apps/.eslintrc.json
COPY apps/next-env.d.ts ./apps/next-env.d.ts
COPY apps/tsconfig.json ./apps/tsconfig.json
COPY apps/pages/Landing ./apps/pages/Landing
COPY libs ./libs
COPY babel1.config.json ./babel1.config.json
COPY next.config.js ./next.config.js
COPY nx.json ./nx.json
COPY tsconfig.base.json ./tsconfig.base.json
COPY webpack.config.ts ./webpack.config.ts
COPY workspace.json ./workspace.json
#mission files and folders
COPY apps/pages/Mission_Management ./apps/pages/Mission_Management
EXPOSE 4200
CMD ["yarn", "start"]
