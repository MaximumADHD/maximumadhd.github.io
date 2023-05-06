## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/eed27dd72eca4e2b4688718ad12fa4af71a8d8f6

## API Changes

```plain
Added Property Content AdGui.FallbackImage
Added Property float AirController.TurnMaxTorque
Added Property float AirController.TurnSpeedFactor
Added Property Enum.KeyCode ChatInputBarConfiguration.KeyboardKeyCode [Hidden]
Added Property bool ChatInputBarConfiguration.IsFocused [ReadOnly] {🧬Unsafe}
Added Property bool ChatInputBarConfiguration.IsFocusedWrite {RobloxScriptSecurity} [Hidden]
Added Property bool StudioService.DEPRECATED_ShowActiveInstanceHighlight {RobloxScriptSecurity} [Hidden] [NotReplicated]

Added Function Instance AssetImportSession:GetImportTree() {RobloxScriptSecurity}
Added Function bool AssetImportSession:IsGltf() {RobloxScriptSecurity}

Added Event MouseService.MouseEnterStudioViewport() {RobloxScriptSecurity}
Added Event MouseService.MouseLeaveStudioViewport() {RobloxScriptSecurity}

Added EnumItem ConnectionError.DisconnectCollaboratorPermissionRevoked : 294
Added EnumItem ConnectionError.DisconnectCollaboratorUnderage : 295
Added EnumItem StudioScriptEditorColorCategories.AICOOverlayText : 41
Added EnumItem StudioScriptEditorColorCategories.AICOOverlayButtonBackground : 42
Added EnumItem StudioScriptEditorColorCategories.AICOOverlayButtonBackgroundHover : 43
Added EnumItem StudioScriptEditorColorCategories.AICOOverlayButtonBackgroundPressed : 44
Added EnumItem StudioStyleGuideColor.AICOOverlayText : 128
Added EnumItem StudioStyleGuideColor.AICOOverlayButtonBackground : 129
Added EnumItem StudioStyleGuideColor.AICOOverlayButtonBackgroundHover : 130
Added EnumItem StudioStyleGuideColor.AICOOverlayButtonBackgroundPressed : 131

Added Tag [Deprecated] to Property BasePart.CollisionGroupId
Added Tag [Deprecated] to Function SensorBase:Sense

Changed the thread safety of Property AirController.BalanceMaxTorque 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property AirController.BalanceSpeed 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property AirController.MaintainLinearMomentum 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property AirController.MoveMaxForce 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property AirController.MaintainAngularMomentum 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property ClimbController.BalanceMaxTorque 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property ClimbController.BalanceRigidityEnabled 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property ClimbController.BalanceSpeed 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property ClimbController.AccelerationTime 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property ClimbController.MoveMaxForce 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property ControllerBase.RigidityEnabled 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property ControllerBase.MoveSpeedFactor 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property ControllerManager.ActiveController 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property ControllerManager.BaseMoveSpeed 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property ControllerManager.BaseTurnSpeed 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property ControllerManager.ClimbSensor 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property ControllerManager.GroundSensor 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property ControllerManager.FacingDirection 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property ControllerManager.MovingDirection 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property GroundController.AccelerationLean 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property GroundController.AlignSpeed 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property GroundController.AlignTorque 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property GroundController.BalanceMaxTorque 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property GroundController.BalanceRigidityEnabled 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property GroundController.BalanceSpeed 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property GroundController.AccelerationTime 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property GroundController.DecelerationTime 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property GroundController.Friction 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property GroundController.FrictionWeight 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property GroundController.GroundOffset 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property GroundController.StandForce 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property GroundController.StandSpeed 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property GroundController.TurnSpeedFactor 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property GroundController.TurningFactor 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property SwimController.PitchMaxTorque 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property SwimController.PitchSpeedFactor 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property SwimController.RollMaxTorque 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property SwimController.RollSpeedFactor 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Changed the thread safety of Property SwimController.AccelerationTime 
	from: {🧬LocalSafe}
	  to: {🧬Safe}

Moved Property ShowActiveInstanceHighlight
	from: Class StudioService
	  to: Class Selection

Removed Property AirController.TurningMaxTorque
Removed Property AirController.TurningSpeedFactor

Removed Function AssetImportSession:GetSettingsRoot
Removed Function ControllerManager:GetControllers
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#574) for a syntax highlighted version!)