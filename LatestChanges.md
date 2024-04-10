## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/5fa1260845fe3e463bf0b110cde438bd59fe3b36

## API Changes

```plain
Added Class AvatarGenerationJob : Instance [NotCreatable]
	Added Property AvatarGenerationJob.Error: Enum.AvatarGenerationError
	Added Property AvatarGenerationJob.ErrorMessage: string
	Added Property AvatarGenerationJob.Progress: number
	Added Property AvatarGenerationJob.Status: Enum.AvatarGenerationJobStatus
	Added Function AvatarGenerationJob:Cancel() -> ()
	Added Function AvatarGenerationJob:Wait() -> () [Yields]

Added Class AvatarGenerationSession : Instance [NotCreatable]
	Added Function AvatarGenerationSession:GenerateAvatarModel(previewJob: Avatar2DGenerationJob, options: { [string]: any }) -> Avatar3DGenerationJob
	Added Function AvatarGenerationSession:GenerateAvatarPreview(textPrompt: string, options: { [string]: any }) -> Avatar2DGenerationJob

Added Class CommerceService : Instance [NotCreatable] [Service]
	Added Function CommerceService:PromptRealWorldCommerceBrowser(player: Player, url: string) -> ()
	Added Function CommerceService:UserEligibleForRealWorldCommerceAsync() -> boolean [Yields]
	Added Event CommerceService.InExperienceBrowserRequested(url: string) {RobloxSecurity}

Added Class ScriptProfilerService : Instance [NotCreatable] [Service]
	Added Function ScriptProfilerService:ClientRequestData(player: Player) -> () {PluginSecurity}
	Added Function ScriptProfilerService:ClientStart(player: Player, frequency: number?) -> () {PluginSecurity}
	Added Function ScriptProfilerService:ClientStop(player: Player) -> () {PluginSecurity}
	Added Function ScriptProfilerService:DeserializeJSON(jsonString: string?) -> { [string]: any } {PluginSecurity} [CustomLuaState]
	Added Function ScriptProfilerService:SaveScriptProfilingData(jsonString: string, filename: string) -> string {RobloxScriptSecurity}
	Added Function ScriptProfilerService:ServerRequestData() -> () {PluginSecurity}
	Added Function ScriptProfilerService:ServerStart(frequency: number?) -> () {PluginSecurity}
	Added Function ScriptProfilerService:ServerStop() -> () {PluginSecurity}
	Added Event ScriptProfilerService.OnNewData(player: Player, jsonString: string) {PluginSecurity}
	Added Event ScriptProfilerService.RequestData() {RobloxSecurity} [Hidden]
	Added Event ScriptProfilerService.SetProfilingState(start: boolean, frequency: number) {RobloxSecurity} [Hidden]

Added Class Avatar2DGenerationJob : AvatarGenerationJob [NotCreatable]
	Added Property Avatar2DGenerationJob.Result: string

Added Class Avatar3DGenerationJob : AvatarGenerationJob [NotCreatable]
	Added Property Avatar3DGenerationJob.Result: Model?

Added Property AudioEmitter.DistanceAttenuation: BinaryString {RobloxSecurity}
Added Property Workspace.InsertPoint: Vector3 [NotReplicated]

Added Function AudioEmitter:GetDistanceAttenuation() -> { [string]: any } [CustomLuaState]
Added Function AudioEmitter:SetDistanceAttenuation(curve: { [string]: any }) -> () [CustomLuaState]
Added Function AvatarCreationService:LoadAvatarModelAsync(id: string) -> Instance? [Yields]
Added Function AvatarCreationService:LoadAvatarPreviewImageAsync(avatarPreview: string) -> EditableImage [Yields]
Added Function CaptureService:DeleteCapturesAsync(pathArr: { any }) -> number {RobloxScriptSecurity} [Yields]
Added Function MaterialService:SetCurrentMaterial(baseMaterial: Enum.Material, materialVariant: string) -> () {RobloxScriptSecurity}
Added Function Selection:AddFocusCallback(priority: number, function: (...any) -> ...any) -> RBXScriptConnection {RobloxScriptSecurity}

Added Event ActivityHistoryService.EventNotificationReceived()
Added Event AvatarCreationService.RequestAvatarModel(id: string) {RobloxSecurity} [Hidden]
Added Event GuiService.OpenAttenuationCurveEditor(selectedCurveObject: Instance) {RobloxScriptSecurity}

Added Enum AvatarGenerationError
	Added EnumItem AvatarGenerationError.None : 0
	Added EnumItem AvatarGenerationError.Timeout : 1
	Added EnumItem AvatarGenerationError.DownloadFailed : 2
	Added EnumItem AvatarGenerationError.Canceled : 3
	Added EnumItem AvatarGenerationError.Unknown : 4

Added Enum AvatarGenerationJobStatus
	Added EnumItem AvatarGenerationJobStatus.NotStarted : 0
	Added EnumItem AvatarGenerationJobStatus.InProgress : 1
	Added EnumItem AvatarGenerationJobStatus.Completed : 2
	Added EnumItem AvatarGenerationJobStatus.Failed : 3

Added EnumItem TextTruncate.SplitWord : 2

Changed the parameters of Event AvatarCreationService.ReplicateAvatarTempAssetIds 
	from: (serializedModel: string, bufferMap: { [string]: any })
	  to: (id: string, serializedModel: string, bufferMap: { [string]: any })

Removed Property StarterPlayer.DeathStyle

Removed Event ActivityHistoryService.onEventNotificationReceived

Removed Enum DeathStyle
	Removed EnumItem DeathStyle.Default
	Removed EnumItem DeathStyle.ClassicBreakApart
	Removed EnumItem DeathStyle.NonGraphic
	Removed EnumItem DeathStyle.Scriptable
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#620) for a syntax highlighted version!)