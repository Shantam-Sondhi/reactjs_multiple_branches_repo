FROM 768610196498.dkr.ecr.us-east-1.amazonaws.com/alu:node-16-16-0-alpine-3.15 
RUN apk add python3 make g++ && rm -rf /var/cache/apk/*
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
#common files and folders
COPY apps/pages/.babelrc ./apps/pages/.babelrc
COPY apps/pages/.eslintrc.json ./apps/pages/.eslintrc.json
COPY apps/pages/next-env.d.ts ./apps/pages/next-env.d.ts
COPY apps/pages/tsconfig.json ./apps/pages/tsconfig.json
COPY apps/pages/Landing ./apps/pages/Landing
COPY libs ./libs
COPY babel1.config.json ./babel1.config.json
COPY next.config.js ./next.config.js
COPY scripts ./scripts
COPY nx.json ./nx.json
COPY tsconfig.base.json ./tsconfig.base.json
COPY webpack.config.ts ./webpack.config.ts
COPY workspace.json ./workspace.json
#coaches files and folders
COPY apps/pages/Coach ./apps/pages/Coach
EXPOSE 4200
CMD ["yarn", "start"]
