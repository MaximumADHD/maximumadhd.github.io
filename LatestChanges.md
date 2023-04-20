## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/ec1fe95d709cbf960916535b93b9e86b102908fb

## API Changes

```plain
Added Property Enum.AvatarUnificationMode Workspace.AvatarUnificationMode [NotScriptable]

Added Event VRService.LaserPointerTriggered(InputObject input) {RobloxScriptSecurity}

Added Enum AvatarUnificationMode
	Added EnumItem AvatarUnificationMode.Default : 0
	Added EnumItem AvatarUnificationMode.Disabled : 1
	Added EnumItem AvatarUnificationMode.Enabled : 2

Added EnumItem VRSessionState.Stopping : 4

Added Tag [Deprecated] to Function ControllerManager:GetControllers

Changed the thread safety of Property AirController.BalanceMaxTorque 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property AirController.BalanceSpeed 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property AirController.MaintainLinearMomentum 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property AirController.MoveMaxForce 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property AirController.VectorForce 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property AirController.MaintainAngularMomentum 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property AirController.TurningMaxTorque 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property AirController.TurningSpeedFactor 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property ClimbController.BalanceMaxTorque 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property ClimbController.BalanceRigidityEnabled 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property ClimbController.BalanceSpeed 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property ClimbController.AccelerationTime 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property ClimbController.MoveMaxForce 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property ControllerBase.RigidityEnabled 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property ControllerBase.MoveSpeedFactor 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property ControllerManager.ActiveController 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property ControllerManager.BaseMoveSpeed 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property ControllerManager.BaseTurnSpeed 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property ControllerManager.ClimbSensor 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property ControllerManager.GroundSensor 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property ControllerManager.FacingDirection 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property ControllerManager.MovingDirection 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property GroundController.AccelerationLean 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property GroundController.AlignSpeed 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property GroundController.AlignTorque 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property GroundController.BalanceMaxTorque 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property GroundController.BalanceRigidityEnabled 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property GroundController.BalanceSpeed 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property GroundController.AccelerationTime 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property GroundController.DecelerationTime 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property GroundController.Friction 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property GroundController.FrictionWeight 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property GroundController.GroundOffset 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property GroundController.StandForce 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property GroundController.StandSpeed 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property GroundController.TurningFactor 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property SwimController.PitchMaxTorque 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property SwimController.PitchSpeedFactor 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property SwimController.RollMaxTorque 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property SwimController.RollSpeedFactor 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Property SwimController.AccelerationTime 
	from: {🧬Safe}
	  to: {🧬LocalSafe}

Changed the thread safety of Function WorldRoot:Blockcast 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Changed the thread safety of Function WorldRoot:Spherecast 
	from: {🧬Unsafe}
	  to: {🧬Safe}

Removed Property UserInputService.GazeSelectionEnabled
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#572) for a syntax highlighted version!)