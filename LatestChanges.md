## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/5001a4705903174088514895945c8081dae20f51

## API Changes

```plain
Added Class SurfaceGuiBase : LayerCollector [NotCreatable]

Added Class AdGui : SurfaceGuiBase [NotCreatable]
	Added Property Enum.AdShape AdGui.AdShape

Added Property Vector2 ChatInputBarConfiguration.AbsolutePosition [ReadOnly] {🧬Unsafe}
Added Property Vector2 ChatInputBarConfiguration.AbsolutePositionWrite {RobloxScriptSecurity} [Hidden]
Added Property Vector2 ChatInputBarConfiguration.AbsoluteSize [ReadOnly] {🧬Unsafe}
Added Property Vector2 ChatInputBarConfiguration.AbsoluteSizeWrite {RobloxScriptSecurity} [Hidden]
Added Property Vector2 ChatWindowConfiguration.AbsolutePosition [ReadOnly] {🧬Unsafe}
Added Property Vector2 ChatWindowConfiguration.AbsolutePositionWrite {RobloxScriptSecurity} [Hidden]
Added Property Vector2 ChatWindowConfiguration.AbsoluteSize [ReadOnly] {🧬Unsafe}
Added Property Vector2 ChatWindowConfiguration.AbsoluteSizeWrite {RobloxScriptSecurity} [Hidden]
Added Property bool ImporterMeshSettings.NoOuterCageFarExtendedFromMesh [ReadOnly]
Added Property bool ImporterMeshSettings.OuterCageFarExtendedFromMeshPreview
Added Property Enum.LoadDynamicHeads StarterPlayer.EnableDynamicHeads [NotScriptable]
Added Property bool ViewportFrame.IsMirrored {RobloxScriptSecurity} [Hidden] [NotReplicated]

Added Function Array Animator:GetPlayingAnimationTracksCoreScript() {RobloxScriptSecurity}
Added Function AnimationTrack Animator:LoadAnimationCoreScript(Animation animation) {RobloxScriptSecurity}
Added Function void Players:ReportAbuseV3(Player player, string jsonTags) {RobloxScriptSecurity}
Added Function Tuple ScriptDocument:ForceSetSelectionAsync(int cursorLine, int cursorCharacter, int? anchorLine = nil, int? anchorCharacter = nil) {PluginSecurity} [Yields]
Added Function Tuple ScriptDocument:RequestSetSelectionAsync(int cursorLine, int cursorCharacter, int? anchorLine = nil, int? anchorCharacter = nil) {PluginSecurity} [Yields]
Added Function void StudioAssetService:ConvertToPackageUpload(string uploadUrl, Objects cloneInstances, Objects originalInstances) {RobloxScriptSecurity}
Added Function bool StudioDeviceEmulatorService:GetTouchInBounds(int index) {RobloxScriptSecurity}

Added Event Animator.AnimationPlayedCoreScript(AnimationTrack animationTrack) {RobloxScriptSecurity}
Added Event FaceAnimatorService.TrackerError(Enum.TrackerError error) {RobloxScriptSecurity}
Added Event StudioAssetService.OnConvertToPackageResult(bool isSuccessful, string errorMessage) {RobloxScriptSecurity}
Added Event StudioDeviceEmulatorService.TouchInBoundsChanged() {RobloxScriptSecurity}
Added Event VideoCaptureService.DevicesChanged() {RobloxScriptSecurity}
Added Event VideoCaptureService.Error(string cameraid, string errorcode) {RobloxScriptSecurity}
Added Event VideoCaptureService.Started(string cameraid) {RobloxScriptSecurity}
Added Event VideoCaptureService.Stopped(string cameraid) {RobloxScriptSecurity}

Added Enum LoadDynamicHeads
	Added EnumItem LoadDynamicHeads.Default : 0
	Added EnumItem LoadDynamicHeads.Disabled : 1
	Added EnumItem LoadDynamicHeads.Enabled : 2

Added Enum TrackerError
	Added EnumItem TrackerError.Ok : 0
	Added EnumItem TrackerError.NoService : 1
	Added EnumItem TrackerError.InitFailed : 2
	Added EnumItem TrackerError.NoVideo : 3
	Added EnumItem TrackerError.VideoError : 4
	Added EnumItem TrackerError.CameraPermission : 5
	Added EnumItem TrackerError.NoAudio : 6
	Added EnumItem TrackerError.AudioError : 7
	Added EnumItem TrackerError.MicPermission : 8

Added LegacyName "Exclude" to EnumItem RaycastFilterType.Blacklist
Added LegacyName "Include" to EnumItem RaycastFilterType.Whitelist

Added Tag [NotReplicated] to Class PlayerEmulatorService
	Added Tag [NotReplicated] to Property PlayerEmulatorService.CustomPoliciesEnabled
	Added Tag [NotReplicated] to Property PlayerEmulatorService.EmulatedCountryCode
	Added Tag [NotReplicated] to Property PlayerEmulatorService.EmulatedGameLocale
	Added Tag [NotReplicated] to Property PlayerEmulatorService.PlayerEmulationEnabled
	Added Tag [NotReplicated] to Property PlayerEmulatorService.SerializedEmulatedPolicyInfo

Changed the superclass of Class SurfaceGui 
	from: "LayerCollector"
	  to: "SurfaceGuiBase"

Changed the serialization of Property ImporterMaterialSettings.DiffuseFilePath 
	from: [<💾> SaveOnly]
	  to: [<💾|📁> Saves|Loads]

Changed the serialization of Property ImporterMaterialSettings.MetalnessFilePath 
	from: [<💾> SaveOnly]
	  to: [<💾|📁> Saves|Loads]

Changed the serialization of Property ImporterMaterialSettings.NormalFilePath 
	from: [<💾> SaveOnly]
	  to: [<💾|📁> Saves|Loads]

Changed the serialization of Property ImporterMaterialSettings.RoughnessFilePath 
	from: [<💾> SaveOnly]
	  to: [<💾|📁> Saves|Loads]

Changed the value of EnumItem LSPMethodType.TextDocument_publishDiagnostics from 19 to 20
Changed the value of EnumItem LSPMethodType.Window_showMessage from 20 to 21
Changed the value of EnumItem LSPMethodType.Window_showMessageRequest from 21 to 22
Changed the value of EnumItem LSPMethodType.Roblox_registerSyntaxCategories from 22 to 23
Changed the value of EnumItem LSPMethodType.Roblox_signalQuiescence from 23 to 24
Changed the value of EnumItem LSPMethodType.Roblox_syntaxHighlight from 24 to 25
Changed the value of EnumItem LSPMethodType.Roblox_suggestExtraSelections from 25 to 26
Changed the value of EnumItem LSPMethodType.Roblox_findExecutablePosition from 26 to 27
Changed the value of EnumItem LSPMethodType.Roblox_findColor3 from 27 to 28
Changed the value of EnumItem LSPMethodType.Roblox_patchSnippetData from 28 to 29

Moved Property Active
	from: Class SurfaceGui
	  to: Class SurfaceGuiBase

Moved Property Adornee
	from: Class SurfaceGui
	  to: Class SurfaceGuiBase

Moved Property Face
	from: Class SurfaceGui
	  to: Class SurfaceGuiBase

Removed Function AssetImportService:Cancel
Removed Function AssetImportService:GetCurrentImportMap
Removed Function AssetImportService:ImportMesh
Removed Function AssetImportService:ImportMeshWithPrompt
Removed Function AssetImportService:IsAvatar
Removed Function AssetImportService:Upload

Removed Event AssetImportService.ProgressUpdate
Removed Event AssetImportService.UploadFinished

Removed Tag [ReadOnly] from Property ImporterMaterialSettings.DiffuseFilePath
Removed Tag [ReadOnly] from Property ImporterMaterialSettings.MetalnessFilePath
Removed Tag [ReadOnly] from Property ImporterMaterialSettings.NormalFilePath
Removed Tag [ReadOnly] from Property ImporterMaterialSettings.RoughnessFilePath
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#540) for a syntax highlighted version!)