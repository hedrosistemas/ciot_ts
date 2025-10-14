CIOT_PATH := $(subst \,/,$(CIOT_PATH))

PB_CIOT_PATH := $(CIOT_PATH)/ciot_protos
PB_OUT := src/protos

gen-ciot:
	echo "Generating CIoT protos..."
	echo "  from: $(PB_CIOT_PATH)"
	protoc --plugin=protoc-gen-ts=node_modules\.bin\protoc-gen-ts.cmd --ts_out=$(PB_OUT) $(PB_CIOT_PATH)/ciot/proto/v2/*.proto --proto_path=$(PB_CIOT_PATH)
