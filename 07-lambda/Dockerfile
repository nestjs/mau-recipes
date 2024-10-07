# For Mac M1, use the following line instead of the next line
# FROM --platform=linux/amd64 public.ecr.aws/lambda/nodejs:20
FROM public.ecr.aws/lambda/nodejs:20

# Copy compiled code to the image
COPY dist ./

# Run the handler function
CMD ["main.handler"]