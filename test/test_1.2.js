function test() {
  var e = _0x2e69f2;
  this["FCN"] = function() {
      var n, a, f, i, u = e;

      function r() {}
      return a = ["^(?=.*Intel)(?=.*Depth).*$", "AlterCam", "ArcSoft", "Avkys", "Avkeys", "AvStream Media Device", "CamMask", "CamSuite", "CamTwist", "Camdirector2", "Camoid", "Cameroid", "ChromaCam", "CyberLink", "DroidCam", "Dummy Video Device", "Dxtory Video", "EpocCam", "FaceRig", "Fake", "KVYcam", "Kinoni Video Source", "MJPEG Camera", "Magic-i", "MagicCamera", "ManyCam", "MayhemGameCapture1", "OBS-camera", "OBS Virtual Camera", "RZ Screen", "screen-capture-recorder", "ScreenCamera", "Snap Camera", "SparkoCam", "SplitCam", "Splitter", "SuperWebcam Capture", "ThinkVantage", "TrackerCam Capture", "TriDef", "USB2.0 Grabber", "UScreenCapture", "VHMultiCam", "VerySoft WebCamSplitter", "VidBlaster VVD", "Video2Webcam", "Virtual Webcam", "WebCamEffects Video Capture", "Webcam Simulator Source", "WebcamMax", "WebcamStudio Video Device", "Wirecast", "XSplitBroadcaster", "ZD Soft", "e2eSoft", "iGlasses", "vMix", "vcam", "vircam", "demoid", "ZX4Webcam"],
          f = ["^.$", "^[0-9]+$", "^(.)\1+$", "^(?=.*Virtual)(?!.*Intel).*$", "Alex's V Project", "AV WebCam Capture", "AVerMedia, AVerTV WDM Video Capture", "Behold TV 409 FM", "Behold TV Columbus", "Beholder A/V Capture", "Beholder Video Capture", "Broadcast SC Video Filter", "Bytescout Screen Capturing Filter", "CamDirector", "Camtasia Studio Video Capture Driver", "Conexant Capture", "drahtwerk's iWebcamera", "False", "FOX_BOX", "Google Camera", "Hauppauge WinTv video capture", "hook cam", "HP Web Camera Filter", "IP Camera", "JiaoMPC Capture", "Klaok", "Luminositi Softcam", "MC Web Cam", "menycam", "Movie", "My Webcam", "PCTV 380e/510e Device", "Pinnacle PCTV 713x Tuner BDA Analog Capture", "Reallusion", "REConverterCapDevice", "subocam", "TV Card WDM Video Capture", "VHScrCap", "video2", "Video2Webc", "videochatde", "VideoMate TV Capture", "vidloop", "VISIT-X Video Splitter", "WCStudio video device", "Webcam 170", "Webcam2", "Zetacam"],
          n = ["^[a-z0-9]+$"],
          i = function(e, n, a) {
              var f, i, r, o = u;
              for (null == a && (a = "i"),
                  f = 0,
                  i = n["length"]; f < i; f++)
                  if (r = n[f],
                      new RegExp(r, a)["test"](e))
                      return !0;
              return !1
          },
          r["isValid"] = function(e) {
              return !i(e, a)
          },
          r["isSuspicious"] = function(e) {
              return i(e, f) || i(e, n, "") || !1
          },
          r
  }()
}