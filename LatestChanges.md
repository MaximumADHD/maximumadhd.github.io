## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/365ae797e251ac52f04873f094a0976e307a5509

## API Changes

```plain
Added Class ControllerBase : Instance [NotCreatable]
	Added Property bool ControllerBase.RigidityEnabled
	Added Property float ControllerBase.MoveSpeedFactor

Added Class ControllerManager : Instance
	Added Property ControllerBase ControllerManager.ActiveController [ReadOnly]
	Added Property float ControllerManager.BaseMoveSpeed
	Added Property float ControllerManager.HipHeight
	Added Function Objects ControllerManager:GetControllers() {🧬Safe}

Added Class AirController : ControllerBase
	Added Property float AirController.OrientationMaxTorque
	Added Property float AirController.OrientationSpeed
	Added Property Vector3 AirController.VectorForce
	Added Property bool AirController.CancelAirMomentum
	Added Property float AirController.MoveMaxForce

Added Class ClimbController : ControllerBase
	Added Property float ClimbController.OrientationMaxTorque
	Added Property float ClimbController.OrientationSpeed
	Added Property float ClimbController.AccelerationTime
	Added Property float ClimbController.MoveMaxForce

Added Class GroundController : ControllerBase
	Added Property float GroundController.AccelerationLean
	Added Property float GroundController.AlignSpeed
	Added Property float GroundController.AlignTorque
	Added Property float GroundController.MaxSlopeAngle
	Added Property float GroundController.AccelerationTime
	Added Property float GroundController.DecelerationTime
	Added Property float GroundController.Friction
	Added Property float GroundController.FrictionWeight
	Added Property float GroundController.StandForce
	Added Property float GroundController.StandSpeed
	Added Property float GroundController.TurningFactor

Added Class SwimController : ControllerBase
	Added Property float SwimController.OrientationMaxTorque
	Added Property float SwimController.OrientationSpeed
	Added Property float SwimController.AccelerationTime

Added Property int64 HumanoidDescription.MoodAnimation
Added Property bool StudioDeviceEmulatorService.IsMultiTouchEmulationOn {RobloxScriptSecurity} [Hidden] [NotReplicated]

Added Function string AssetImportService:PickFileWithPrompt() {RobloxScriptSecurity} [Yields]
Added Function string FacialAnimationRecordingService:CheckOrRequestCameraPermission() {RobloxScriptSecurity} [Yields]
Added Function Objects ScriptEditorService:GetScriptDocuments() {PluginSecurity}

Added Event BreakpointManager.MetaBreakpointSetChanged(MetaBreakpoint breakpoint, Dictionary detail) {RobloxScriptSecurity}
Added Event Humanoid.EmoteTriggered(Tuple successAndTrackTuple) {RobloxScriptSecurity}

Added Enum AdFormat
	Added EnumItem AdFormat.Image : 1

Added Enum AdShape
	Added EnumItem AdShape.HorizontalRectangle : 1

Added Enum OutfitType
	Added EnumItem OutfitType.All : 1
	Added EnumItem OutfitType.Avatar : 2
	Added EnumItem OutfitType.DynamicHead : 3

Added EnumItem AssetType.MoodAnimation : 78
Added EnumItem AvatarAssetType.MoodAnimation : 78
Added EnumItem BundleType.DynamicHead : 4
Added EnumItem BundleType.DynamicHeadAvatar : 5

Changed the parameters of Function AvatarEditorService:GetOutfits 
	from: (Enum.OutfitSource outfitSource = "All")
	  to: (Enum.OutfitSource outfitSource = "All", Enum.OutfitType outfitType = "All")

Removed Class ToolboxService
	Removed Callback ToolboxService.ProcessAssetInsertionDrag
	Removed Callback ToolboxService.ProcessAssetInsertionDrop

Removed Property TextBox.EnableRealtimeFilteringHints
Removed Property Workspace.PhysicsInertiaAndVolumeFix

Removed Enum PhysicsInertiaAndVolumeFix
	Removed EnumItem PhysicsInertiaAndVolumeFix.Default
	Removed EnumItem PhysicsInertiaAndVolumeFix.Disabled
	Removed EnumItem PhysicsInertiaAndVolumeFix.Enabled
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#539) for a syntax highlighted version!)