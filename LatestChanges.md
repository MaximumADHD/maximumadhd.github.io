## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/2af64eb07a909933d60a513c8fcfa738b0cd495f

## API Changes

```plain
Added Property float AirController.BalanceMaxTorque
Added Property bool AirController.BalanceRigidityEnabled
Added Property float AirController.BalanceSpeed
Added Property float AirController.TurningMaxTorque
Added Property float AirController.TurningSpeedFactor
Added Property Enum.AudioSubType AudioSearchParams.AudioSubType
Added Property float ClimbController.BalanceMaxTorque
Added Property bool ClimbController.BalanceRigidityEnabled
Added Property float ClimbController.BalanceSpeed
Added Property float GroundController.BalanceMaxTorque
Added Property bool GroundController.BalanceRigidityEnabled
Added Property float GroundController.BalanceSpeed

Added Function void DataModel:SetFlagVersion(string name, int version) {RobloxScriptSecurity}

Added Tags [NotReplicated] [Deprecated] to Property AudioSearchParams.AudioSubtype

Changed the category of Property AirController.VectorForce 
	from: "Balance"
	  to: "Movement"

Changed the category of Property AirController.OrientationMaxTorque 
	from: "Balance"
	  to: "Orientation"

Changed the category of Property AirController.OrientationSpeedFactor 
	from: "Balance"
	  to: "Orientation"

Changed the category of Property AirController.MaintainAngularMomentum 
	from: "Movement"
	  to: "Turn"

Changed the serialization of Property AudioSearchParams.AudioSubtype 
	from: [<💾|📁> Saves|Loads]
	  to: [<📁> LoadOnly]
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#571) for a syntax highlighted version!)