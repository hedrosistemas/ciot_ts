CIOT_PATH := $(subst \,/,$(CIOT_PATH))

PB_CIOT_PATH := $(CIOT_PATH)/ciot_protos
PB_HDR_PATH := $(realpath ../../protos/gateway)
PB_OUT := src/protos

gen-ciot:
	protoc --plugin=protoc-gen-ts=node_modules\.bin\protoc-gen-ts.cmd --ts_out=$(PB_OUT) $(PB_CIOT_PATH)/ciot/proto/v2/*.proto --proto_path=$(PB_CIOT_PATH)
	protoc --plugin=protoc-gen-ts=node_modules\.bin\protoc-gen-ts.cmd --ts_out=$(PB_OUT) $(PB_HDR_PATH)/ciot/proto/v2/msg_data.proto --proto_path=$(PB_HDR_PATH) --proto_path=$(PB_CIOT_PATH)

gen-hg:
	protoc --plugin=protoc-gen-ts=node_modules\.bin\protoc-gen-ts.cmd --ts_out=$(PB_OUT) $(PB_HDR_PATH)/hg/proto/v1/*.proto --proto_path=$(PB_HDR_PATH) --proto_path=$(PB_CIOT_PATH)
	
gen-pcm:
	protoc --plugin=protoc-gen-ts=node_modules\.bin\protoc-gen-ts.cmd --ts_out=$(PB_OUT) $(PB_HDR_PATH)/pcm/proto/v1/*.proto --proto_path=$(PB_HDR_PATH) --proto_path=$(PB_CIOT_PATH)

gen-protos:
	$(MAKE) gen-ciot
	$(MAKE) gen-hg
	$(MAKE) gen-pcm