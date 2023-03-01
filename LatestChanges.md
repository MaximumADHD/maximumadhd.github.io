## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/4533d4033c50b9e46b6ff0998de07f26930e8053

## API Changes

```plain
Added Class SensorBase : Instance [NotCreatable]
	Added Property Enum.SensorUpdateType SensorBase.UpdateType
	Added Function void SensorBase:Sense()
	Added Event SensorBase.OnSensorOutputChanged()

Added Class BuoyancySensor : SensorBase [NotBrowsable]
	Added Property bool BuoyancySensor.FullySubmerged
	Added Property bool BuoyancySensor.TouchingSurface

Added Class ControllerSensor : SensorBase [NotCreatable]

Added Class ControllerPartSensor : ControllerSensor [NotBrowsable]
	Added Property float ControllerPartSensor.SearchDistance
	Added Property Enum.SensorMode ControllerPartSensor.SensorMode
	Added Property CFrame ControllerPartSensor.HitFrame
	Added Property Vector3 ControllerPartSensor.HitNormal
	Added Property BasePart ControllerPartSensor.SensedPart

Added Property string AnimationClip.Guid {RobloxScriptSecurity} [Hidden] [NotReplicated]
Added Property BinaryString AnimationClip.GuidBinaryString {RobloxScriptSecurity} [Hidden] [NotScriptable]
Added Property ControllerSensor ControllerManager.ClimbSensor
Added Property ControllerSensor ControllerManager.GroundSensor
Added Property Enum.VRPlayMode UserGameSettings.VRPlayMode {✏️RobloxScriptSecurity} [Hidden] [NotReplicated]
Added Property Vector3 WireframeHandleAdornment.Scale

Added Function Tuple AdService:GetAdTeleportInfo() {RobloxScriptSecurity}
Added Function void AdService:ReturnToPublisherExperience(Enum.AdTeleportMethod adTeleportMethod) {RobloxScriptSecurity}
Added Function void MessageBusService:MakeRequest(string protocolName, string methodName, Variant message, Function callback) {RobloxScriptSecurity}
Added Function void MessageBusService:SetRequestHandler(string protocolName, string methodName, Function callback) {RobloxScriptSecurity}
Added Function void Players:ResetLocalPlayer() {LocalUserSecurity}
Added Function Array Terrain:GetTerrainWireframe(CFrame cframe, Vector3 size) {RobloxScriptSecurity}
Added Function bool ThirdPartyUserService:IsOver13() {RobloxScriptSecurity}

Added Event SafetyService.ScreenshotUploaded(int64 screenshotJobId, string screenshotId) {RobloxScriptSecurity}

Added Enum AdTeleportMethod
	Added EnumItem AdTeleportMethod.Undefined : 0
	Added EnumItem AdTeleportMethod.PortalForward : 1
	Added EnumItem AdTeleportMethod.PortalReturn : 2
	Added EnumItem AdTeleportMethod.InGameMenuBackButton : 3
	Added EnumItem AdTeleportMethod.UIBackButton : 4

Added Enum CreatorTypeFilter
	Added EnumItem CreatorTypeFilter.User : 0
	Added EnumItem CreatorTypeFilter.Group : 1
	Added EnumItem CreatorTypeFilter.All : 2

Added Enum SensorMode
	Added EnumItem SensorMode.Floor : 0
	Added EnumItem SensorMode.Ladder : 1

Added Enum SensorUpdateType
	Added EnumItem SensorUpdateType.OnRead : 0
	Added EnumItem SensorUpdateType.Manual : 1

Added Enum VRPlayMode
	Added EnumItem VRPlayMode.Seated : 0
	Added EnumItem VRPlayMode.Standing : 1

Added EnumItem UserCFrame.Floor : 3

Removed Property DataModelMesh.LODX
Removed Property DataModelMesh.LODY
Removed Property Workspace.AnimationWeightedBlendFix

Removed Function Terrain:HideTerrainRegion
Removed Function Terrain:SetTerrainRegion
Removed Function Terrain:SetWireframeRegion
Removed Function Terrain:ShowTerrainRegion

Removed Enum LevelOfDetailSetting
	Removed EnumItem LevelOfDetailSetting.Low
	Removed EnumItem LevelOfDetailSetting.Medium
	Removed EnumItem LevelOfDetailSetting.High

Removed Enum NewAnimationRuntimeSetting
	Removed EnumItem NewAnimationRuntimeSetting.Default
	Removed EnumItem NewAnimationRuntimeSetting.Disabled
	Removed EnumItem NewAnimationRuntimeSetting.Enabled

Removed Tag [NotBrowsable] from Property ScreenGui.ClipToDeviceSafeArea
Removed Tag [NotBrowsable] from Property ScreenGui.SafeAreaCompatibility
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#565) for a syntax highlighted version!)