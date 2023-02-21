VERSION=0.01
IMAGE_NAME=to_do_list_backend

FULL_IMAGE_NAME=${IMAGE_NAME}:${VERSION}

docker build ../../ -f ../../backend/Dockerfile -t ${FULL_IMAGE_NAME}