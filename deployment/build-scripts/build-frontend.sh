VERSION=0.01
IMAGE_NAME=to_do_list_frontend

FULL_IMAGE_NAME=${IMAGE_NAME}:${VERSION}

docker build ../../ -f ../../frontend/Dockerfile -t ${FULL_IMAGE_NAME}