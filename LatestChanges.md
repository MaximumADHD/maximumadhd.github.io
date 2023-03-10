## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/4188f76163cf609235c4b21d79720cda49bfc8a4

## API Changes

```plain
Added Class FacialAnimationStreamingServiceStats : Instance [NotCreatable] [NotReplicated]
	Added Function int64 FacialAnimationStreamingServiceStats:Get(string label) {RobloxScriptSecurity}
	Added Function int64 FacialAnimationStreamingServiceStats:GetWithPlayerId(string label, int64 playerId) {RobloxScriptSecurity}

Added Class MaterialGenerationService : Instance [NotCreatable] [Service] [NotReplicated]
	Added Function MaterialGenerationSession MaterialGenerationService:StartSession() {RobloxScriptSecurity}

Added Class MaterialGenerationSession : Instance [NotCreatable] [NotReplicated]
	Added Function Array MaterialGenerationSession:GenerateImagesAsync(string prompt, Dictionary options) {RobloxScriptSecurity} [Yields]
	Added Function Dictionary MaterialGenerationSession:GenerateMaterialAsync(string imageId) {RobloxScriptSecurity} [Yields]

Added Property bool Animator.EvaluationThrottled [ReadOnly] [NotBrowsable]
Added Property string ImporterRootSettings.ExistingPackageId
Added Property bool ImporterRootSettings.ImportAsPackage
Added Property bool Selection.ShowBoundingBox {RobloxScriptSecurity} [Hidden]

Added Function FacialAnimationStreamingServiceStats FacialAnimationStreamingServiceV2:GetStats() {RobloxScriptSecurity}
Added Function string RbxAnalyticsService:GetPlaySessionId() {RobloxScriptSecurity}
Added Function void Terrain:ReplaceMaterialInTransform(CFrame cframe, Vector3 size, Enum.Material sourceMaterial, Enum.Material targetMaterial) {RobloxScriptSecurity}
Added Function void Terrain:SetMaterialInTransform(CFrame cframe, Vector3 size, Enum.Material targetMaterial) {RobloxScriptSecurity}

Added Event AssetImportSession.UploadCompleteDeprecated(bool succeeded, Dictionary errorMap)
Added Event FaceAnimatorService.TrackerPrompt(Enum.TrackerPromptEvent prompt) {RobloxScriptSecurity}
Added Event VoiceChatService.VoiceChatPlayerMuteStateChangedClientToServer(Enum.MuteState muteState) {RobloxSecurity} [Hidden]
Added Event VoiceChatService.VoiceChatPlayerMuteStateChangedServerToClient(Enum.MuteState muteState) {RobloxSecurity} [Hidden]

Added Enum MuteState
	Added EnumItem MuteState.Unmuted : 0
	Added EnumItem MuteState.Muted : 1

Added Enum TrackerPromptEvent
	Added EnumItem TrackerPromptEvent.LODCameraRecommendDisable : 0

Added EnumItem ScopeCheckResult.ConsentDenied : 7

Added Tag [NotBrowsable] to Property ScreenGui.ClipToDeviceSafeArea
Added Tag [NotBrowsable] to Property ScreenGui.SafeAreaCompatibility

Changed the read permissions of Property BaseScript.RunContext 
	from: {PluginSecurity}
	  to: {None}

Changed the thread safety of Function Humanoid:GetState 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Changed the thread safety of Function Humanoid:GetStateEnabled 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Changed the thread safety of Function Workspace:GetNumAwakeParts 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Changed the thread safety of Function Workspace:GetPhysicsThrottling 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Changed the thread safety of Function Workspace:GetServerTimeNow 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Changed the parameters of Event AssetImportSession.UploadComplete 
	from: (bool succeeded, Dictionary errorMap)
	  to: (Dictionary results)
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#566) for a syntax highlighted version!)