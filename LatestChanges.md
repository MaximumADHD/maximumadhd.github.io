## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/29664da69e1b3ddf15eac3aeb0d19c2557497825

## API Changes

```plain
Added Class TextFilterTranslatedResult : Instance [NotCreatable] [NotReplicated]
	Added Property string TextFilterTranslatedResult.SourceLanguage [ReadOnly]
	Added Property TextFilterResult TextFilterTranslatedResult.SourceText [ReadOnly]
	Added Function Dictionary TextFilterTranslatedResult:GetTranslations()

Added Class DragDetector : ClickDetector [NotBrowsable]
	Added Property Enum.DragDetectorDragStyle DragDetector.DragStyle
	Added Property bool DragDetector.Enabled
	Added Property Enum.DragDetectorResponseStyle DragDetector.ResponseStyle
	Added Property bool DragDetector.RunLocally
	Added Property float DragDetector.TrackballRadialPullFactor
	Added Property float DragDetector.TrackballRollFactor
	Added Property Instance DragDetector.ReferenceInstance
	Added Property Vector3 DragDetector.Axis [<📁> LoadOnly] [NotReplicated]
	Added Property Vector3 DragDetector.Orientation
	Added Property Vector3 DragDetector.SecondaryAxis [<📁> LoadOnly] [NotReplicated]
	Added Property Vector3 DragDetector.WorldAxis [<📁> LoadOnly] [NotReplicated]
	Added Property Vector3 DragDetector.WorldSecondaryAxis [<📁> LoadOnly] [NotReplicated]
	Added Property float DragDetector.MaxDragAngle
	Added Property Vector3 DragDetector.MaxDragTranslation
	Added Property float DragDetector.MinDragAngle
	Added Property Vector3 DragDetector.MinDragTranslation
	Added Property CFrame DragDetector.DragFrame
	Added Property Enum.KeyCode DragDetector.GamepadModeSwitchKeyCode
	Added Property Enum.KeyCode DragDetector.KeyboardModeSwitchKeyCode
	Added Property Enum.KeyCode DragDetector.VRSwitchKeyCode
	Added Property bool DragDetector.ApplyAtCenterOfMass
	Added Property float DragDetector.MaxForce
	Added Property float DragDetector.MaxTorque
	Added Property float DragDetector.Responsiveness
	Added Function void DragDetector:AddConstraintFunction(string name, int priority, Function function)
	Added Function CFrame DragDetector:GetReferenceFrame()
	Added Function void DragDetector:RemoveConstraintFunction(string name)
	Added Function void DragDetector:RestartDrag()
	Added Function void DragDetector:SetDragStyleFunction(Function function)
	Added Event DragDetector.DragContinue(Player playerWhoDragged, Ray cursorRay, CFrame viewFrame, OptionalCoordinateFrame vrInputFrame, bool isModeSwitchKeyDown)
	Added Event DragDetector.DragEnd(Player playerWhoDragged)
	Added Event DragDetector.DragStart(Player playerWhoDragged, Ray cursorRay, CFrame viewFrame, CFrame hitFrame, BasePart clickedPart, OptionalCoordinateFrame vrInputFrame, bool isModeSwitchKeyDown)

Added Property string Humanoid.InternalDisplayName {RobloxScriptSecurity} [Hidden] [NotReplicated]
Added Property bool ParticleEmitter.WindAffectsDrag
Added Property bool Studio.Automatically trigger AI Code Completion {RobloxScriptSecurity}
Added Property Enum.CompileTarget SyncScriptBuilder.CompileTarget
Added Property bool VoiceChatService.UseNewJoinFlow {RobloxSecurity}

Added Function Objects Attachment:GetConstraints()
Added Function Vector3 BasePart:GetClosestPointOnSurface(Vector3 position)
Added Function Objects InsertService:LoadAssetWithFormat(int64 assetId, string format) {RobloxScriptSecurity} [Yields]
Added Function void Instance:AddTag(string tag)
Added Function Array Instance:GetTags() {🧬Safe}
Added Function bool Instance:HasTag(string tag) {🧬Safe}
Added Function void Instance:RemoveTag(string tag)
Added Function Objects Model:GetPersistentPlayers()
Added Function int64 PluginManagementService:GetOTAPluginVersion(string pluginName = "") {RobloxScriptSecurity} [Yields]
Added Function Instance TextService:FilterAndTranslateStringAsync(string stringToFilter, int64 fromUserId, Array targetLocales, Enum.TextFilterContext textContext = "PrivateChat") [Yields]
Added Function bool UGCValidationService:ValidateNumTextureChannels(string textureId, int numChannelsRequired) {RobloxScriptSecurity} [Yields]

Added Enum CompileTarget
	Added EnumItem CompileTarget.Client : 0
	Added EnumItem CompileTarget.CoreScript : 1
	Added EnumItem CompileTarget.Studio : 2
	Added EnumItem CompileTarget.CoreScriptRaw : 3

Added Enum DragDetectorDragStyle
	Added EnumItem DragDetectorDragStyle.TranslateLine : 0
	Added EnumItem DragDetectorDragStyle.TranslatePlane : 1
	Added EnumItem DragDetectorDragStyle.TranslatePlaneOrLine : 2
	Added EnumItem DragDetectorDragStyle.TranslateLineOrPlane : 3
	Added EnumItem DragDetectorDragStyle.TranslateViewPlane : 4
	Added EnumItem DragDetectorDragStyle.RotateAxis : 5
	Added EnumItem DragDetectorDragStyle.RotateTrackball : 6
	Added EnumItem DragDetectorDragStyle.Scriptable : 7
	Added EnumItem DragDetectorDragStyle.BestForDevice : 8

Added Enum DragDetectorResponseStyle
	Added EnumItem DragDetectorResponseStyle.Geometric : 0
	Added EnumItem DragDetectorResponseStyle.Physical : 1
	Added EnumItem DragDetectorResponseStyle.Custom : 2

Added Tag [Deprecated] to Property Player.DevEnableMouseLock
Added Tag [Deprecated] to Property StarterPlayer.EnableMouseLockOption
Added Tag [Deprecated] to Property SyncScriptBuilder.RawBytecode
Added Tag [Deprecated] to Property UserGameSettings.ControlMode

Changed the thread safety of Function PVInstance:GetPivot 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Removed Function UGCValidationService:GetMeshTriCountSync
Removed Function UGCValidationService:GetMeshVertsSync
Removed Function UGCValidationService:GetTextureSizeSync
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#576) for a syntax highlighted version!)