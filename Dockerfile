# Use the official lightweight Nginx image
FROM nginx:alpine

# Copy your compiled site into Nginx’s html folder
COPY dist/ /usr/share/nginx/html

# Expose port 80 (HTTP) internally
EXPOSE 80