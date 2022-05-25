## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/581236f68b6325497867f5dea0d057ba1e2e8871

## API Changes

```plain
Added Class AnimationStreamTrack : Instance [NotCreatable] [NotReplicated]
	Added Property bool AnimationStreamTrack.IsPlaying [Hidden] [ReadOnly]
	Added Property Enum.AnimationPriority AnimationStreamTrack.Priority [Hidden] [NotReplicated]
	Added Property float AnimationStreamTrack.WeightCurrent [Hidden] [ReadOnly]
	Added Property float AnimationStreamTrack.WeightTarget [Hidden] [ReadOnly]
	Added Function void AnimationStreamTrack:AdjustWeight(float weight = 1, float fadeTime = 0.100000001) {RobloxScriptSecurity}
	Added Function void AnimationStreamTrack:Play(float fadeTime = 0.100000001, float weight = 1) {RobloxScriptSecurity}
	Added Function void AnimationStreamTrack:Stop(float fadeTime = 0.100000001) {RobloxScriptSecurity}
	Added Event AnimationStreamTrack.Stopped() {RobloxScriptSecurity}

Added Class FacialAnimationStreamingService : Instance [NotCreatable] [Service]
	Added Property bool FacialAnimationStreamingService.Enabled {RobloxScriptSecurity} [Hidden]

Added Class RtMessagingService : Instance [NotCreatable] [Service] [NotReplicated]

Added Class ScriptDocument : Instance [NotCreatable] [NotReplicated]
	Added Function int ScriptDocument:GetNumLines() {RobloxScriptSecurity}
	Added Function LuaSourceContainer ScriptDocument:GetScript() {RobloxScriptSecurity}
	Added Function string ScriptDocument:GetText() {RobloxScriptSecurity}

Added Class ScriptEditorService : Instance [NotCreatable] [Service] [NotReplicated]
	Added Function void ScriptEditorService:RegisterLSPCallback(Enum.LSPMethodType methodToOverride, Function callbackFunction) {RobloxScriptSecurity}
	Added Event ScriptEditorService.TextDocumentDidChange(ScriptDocument document, Variant changesArray) {RobloxScriptSecurity}
	Added Event ScriptEditorService.TextDocumentDidClose(ScriptDocument oldDocument) {RobloxScriptSecurity}
	Added Event ScriptEditorService.TextDocumentDidOpen(ScriptDocument newDocument) {RobloxScriptSecurity}

Added Class TrackerStreamAnimation : Instance [NotReplicated]

Added Property Color3 CanvasGroup.GroupColor3
Added Property bool ImporterRootSettings.InsertWithScenePosition

Added Function AnimationStreamTrack Animator:LoadStreamAnimation(TrackerStreamAnimation animation) {RobloxScriptSecurity}
Added Function void MetaBreakpoint:SetChildBreakpointEnabledByScriptAndContext(string script, int contextGST, bool enabled) {RobloxScriptSecurity}

Added EnumItem ConnectionError.DisconnectOutOfMemoryExitContinue : 288

Added Tag [NotReplicated] to Property UserGameSettings.DefaultCameraID
Added Tag [Yields] to Function TextChannel:SendAsync

Changed the serialization of Property VideoCaptureService.Active 
	from: [<💾|📁> Saves|Loads]
	  to: [<🕒> RuntimeOnly]

Changed the serialization of Property VideoCaptureService.CameraID 
	from: [<💾|📁> Saves|Loads]
	  to: [<🕒> RuntimeOnly]

Removed Class LSPService
	Removed Function LSPService:RegisterLSPCallback

Removed Property CanvasGroup.GroupColor

Removed Function StudioService:GetUserIsInTeamCreateToggleRamp
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#528) for a syntax highlighted version!)
