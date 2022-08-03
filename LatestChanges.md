## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/55e011f023d153155a5a5c86535d11df3e2bd873

## API Changes

```plain
Added Class FacialAnimationRecordingService : Instance [NotCreatable] [Service] [NotReplicated]
	Added Property bool FacialAnimationRecordingService.BiometricDataConsent {RobloxScriptSecurity} [Hidden] [NotReplicated]
	Added Function bool FacialAnimationRecordingService:IsAgeRestricted() {RobloxScriptSecurity}

Added Class PluginManagementService : Instance [NotCreatable] [Service] [NotReplicated]
	Added Function void PluginManagementService:SetAutoUpdate(int64 pluginId, bool state) {RobloxScriptSecurity}

Added Class AssetSoundEffect : SoundEffect [NotCreatable]

Added Class WireframeHandleAdornment : HandleAdornment [NotBrowsable]
	Added Function void WireframeHandleAdornment:AddLine(Vector3 from, Vector3 to)
	Added Function void WireframeHandleAdornment:AddLines(Array points)
	Added Function void WireframeHandleAdornment:AddPath(Array points, bool loop)
	Added Function void WireframeHandleAdornment:Clear()

Added Property PhysicalProperties MaterialVariant.CustomPhysicalProperties
Added Property bool StudioDeviceEmulatorService.HasMultiTouchStarted {RobloxScriptSecurity} [Hidden] [ReadOnly]
Added Property bool StudioDeviceEmulatorService.IsMultiTouchEnabled {RobloxScriptSecurity} [Hidden] [ReadOnly]
Added Property Vector2 StudioDeviceEmulatorService.PivotPosition {RobloxScriptSecurity} [Hidden] [ReadOnly]

Added Function Tuple AnimationStreamTrack:GetTrackerData() {RobloxScriptSecurity}
Added Function Array AvatarEditorService:GetRecommendedAssetsV2(Enum.AvatarAssetType assetType, int64 assetId, int numItems, bool includeDetails) [Yields]
Added Function Array AvatarEditorService:GetRecommendedBundlesV2(Enum.BundleType bundleType, int64 bundleId, int numItems, bool includeDetails) [Yields]
Added Function bool GuiService:GetGuiIsVisible(Enum.GuiType guiType) {RobloxScriptSecurity}
Added Function void GuiService:ToggleGuiIsVisibleIfAllowed(Enum.GuiType guiType) {RobloxScriptSecurity}
Added Function Dictionary PackageUIService:GetPackageInfo(int64 packageAssetId) {RobloxScriptSecurity} [Yields]
Added Function void PackageUIService:PublishPackage(Instance packageInstance) {RobloxScriptSecurity} [Yields]
Added Function Instance PackageUIService:SetPackageVersion(Instance packageInstance, int64 versionNumber) {RobloxScriptSecurity} [Yields]
Added Function Array PhysicsService:GetRegisteredCollisionGroups()
Added Function void PhysicsService:RegisterCollisionGroup(string name)
Added Function void PhysicsService:UnregisterCollisionGroup(string name)
Added Function void Player:SetModerationAccessKey(string moderationAccessKey) {RobloxScriptSecurity}
Added Function void ScriptContext:ClearScriptProfilingData() {RobloxScriptSecurity}
Added Function void ScriptContext:StartScriptProfiling() {RobloxScriptSecurity}
Added Function string ScriptContext:StopScriptProfiling() {RobloxScriptSecurity} [CustomLuaState]
Added Function string ScriptDocument:GetSelectedText() {PluginSecurity}
Added Function Tuple ScriptDocument:GetSelectionEnd() {PluginSecurity}
Added Function Tuple ScriptDocument:GetSelectionStart() {PluginSecurity}
Added Function bool ScriptDocument:HasSelectedText() {PluginSecurity}
Added Function int StudioDeviceEmulatorService:GetMaxNumTouches() {RobloxScriptSecurity}
Added Function Vector2 StudioDeviceEmulatorService:GetTouchPosition(int index) {RobloxScriptSecurity}

Added Event GuiService.GuiVisibilityChangedSignal(Enum.GuiType guiType, bool visible) {RobloxScriptSecurity}
Added Event StudioDeviceEmulatorService.TouchPositionsChanged() {RobloxScriptSecurity}

Added Enum GuiType
	Added EnumItem GuiType.Core : 0
	Added EnumItem GuiType.Custom : 1
	Added EnumItem GuiType.PlayerNameplates : 2
	Added EnumItem GuiType.CustomBillboards : 3

Added EnumItem CollisionFidelity.DynamicPreciseConvexDecomposition : 4
Added EnumItem ConnectionError.DisconnectOutOfMemoryKeepPlayingExit : 289

Added Tag [Deprecated] to Function AvatarEditorService:GetRecommendedAssets
Added Tag [Deprecated] to Function AvatarEditorService:GetRecommendedBundles
Added Tag [Deprecated] to Function DebuggerManager:StepIn
Added Tag [Deprecated] to Function DebuggerManager:StepOut
Added Tag [Deprecated] to Function DebuggerManager:StepOver
Added Tag [Deprecated] to Function Model:GetPrimaryPartCFrame
Added Tag [Deprecated] to Function Model:SetPrimaryPartCFrame

Changed the category of Property BasePart.CFrame 
	from: "Data"
	  to: "Transform"

Changed the category of Property BasePart.Orientation 
	from: "Data"
	  to: "Transform"

Changed the category of Property BasePart.Position 
	from: "Data"
	  to: "Transform"

Changed the category of Property BasePart.Size 
	from: "Part"
	  to: "Transform"

Changed the category of Property Model.PrimaryPart 
	from: "Data"
	  to: "Pivot"

Changed the thread safety of Property Bone.TransformedWorldCFrame 
	from: {🧬Safe}
	  to: {🧬Unsafe}

Changed the thread safety of Function HttpService:GenerateGUID 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Changed the thread safety of Function HttpService:JSONDecode 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Changed the thread safety of Function HttpService:JSONEncode 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Changed the thread safety of Function HttpService:UrlEncode 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Changed the thread safety of Function RunService:IsClient 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Changed the thread safety of Function RunService:IsEdit 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Changed the thread safety of Function RunService:IsRunMode 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Changed the thread safety of Function RunService:IsServer 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Changed the thread safety of Function RunService:IsStudio 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Changed the thread safety of Function Workspace:GetRealPhysicsFPS 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Removed Class ABTestService
	Removed Function ABTestService:ClearUserVariations
	Removed Function ABTestService:GetBrowserTrackerABTestLoadingStatus
	Removed Function ABTestService:GetPendingOrInitializedUserId
	Removed Function ABTestService:GetUserABTestLoadingStatus
	Removed Function ABTestService:GetVariant
	Removed Function ABTestService:InitializeForUserId
	Removed Function ABTestService:WaitUntilBrowserTrackerABTestsInitialized
	Removed Function ABTestService:WaitUntilUserABTestsInitialized
	Removed Event ABTestService.OnBrowserTrackerABTestLoadingStatusChanged
	Removed Event ABTestService.OnUserABTestLoadingStatusChanged

Removed Class RomarkSoundEffect

Removed Property Workspace.PhysicsSimulationRate

Removed Enum ABTestLoadingStatus
	Removed EnumItem ABTestLoadingStatus.None
	Removed EnumItem ABTestLoadingStatus.Pending
	Removed EnumItem ABTestLoadingStatus.Initialized
	Removed EnumItem ABTestLoadingStatus.Error
	Removed EnumItem ABTestLoadingStatus.TimedOut
	Removed EnumItem ABTestLoadingStatus.ShutOff

Removed Tag [NotBrowsable] from Property SoundService.VolumetricAudio
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#538) for a syntax highlighted version!)