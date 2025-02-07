from ultralytics import YOLO
from cv2 import VideoCapture, imwrite,CAP_PROP_FRAME_COUNT
from sys import argv
from os import listdir,mkdir
from time import perf_counter
from hashlib import sha256

threshold:float = 0.8
interval:int = 5 # interval != 0
model:YOLO = YOLO("yolov8n.pt",verbose=False)
gui:bool = False

#preprocess
mkdir("detected")
mkdir("normal")
mkdir("normal/image")
mkdir("normal/label")
mkdir("none")

for video in listdir(argv[1]):
    video = f"{argv[1]}/{video}"
    source = VideoCapture(video)
    success = True
    now = 1
    i = 0
    while success:
        success, image = source.read()
        if now != interval:
            now += 1
            continue
        now = 1
        info = []
        result = model(image,stream=True,conf=threshold)
        for res in result:
            filename = sha256(bytes(perf_counter(),"utf-8")).hexdigest()
            if not res.boxes:
                imwrite(f"none/{filename}.jpg",image)
                print(f"{i} out of {CAP_PROP_FRAME_COUNT} completed, detected none.",flush=True)
                continue
            for box in res.boxes:
                info.append(f"{int(box.cls)} {box.xyxy[0]} {box.xyxy[1]} {box.xyxy[2]} {box.xyxy[3]}\n")
                print(f"{i} out of {CAP_PROP_FRAME_COUNT} completed, detected {model.names[int(box.cls)]} at {box.xyxy[0]} {box.xyxy[1]} {box.xyxy[2]} {box.xyxy[3]}",flush=True)
            with open(f"normal/label/{filename}.txt","w") as file:
                file.writelines(info)
            imwrite(f"normal/image/{filename}.jpg",image)
            
        i += 1