FROM keymetrics/pm2:8-stretch

# Bundle APP files
COPY server server/

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

# Show current folder structure in logs
RUN ls -al -R

CMD [ "pm2-runtime", "start", "pm2.json" ]