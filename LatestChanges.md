## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/2535e037a377dd68d73d0b8938807bbd58b966cc

## API Changes

```plain
Added Class LSPFileSyncService : Instance [NotCreatable] [Service] [NotReplicated]
Added Class SnippetService : Instance [NotCreatable] [Service] [NotReplicated]
Added Class PlaneConstraint : Constraint

Added Property Enum.PhysicsInertiaAndVolumeFix Workspace.PhysicsInertiaAndVolumeFix [NotScriptable]

Added Function string RunService:GetRobloxClientChannel() {RobloxScriptSecurity}

Added Enum PhysicsInertiaAndVolumeFix
	Added EnumItem PhysicsInertiaAndVolumeFix.Default : 0
	Added EnumItem PhysicsInertiaAndVolumeFix.Disabled : 1
	Added EnumItem PhysicsInertiaAndVolumeFix.Enabled : 2

Added EnumItem LSPMethodType.Roblox_patchSnippetData : 27

Added Tag [Deprecated] to Class Plane

Changed the superclass of Class Plane 
	from: "Constraint"
	  to: "PlaneConstraint"

Removed Class ScriptCloneWatcherHelperV2

Removed Class ImporterTextureSettings
	Removed Property ImporterTextureSettings.FilePath

Removed Tag [NotBrowsable] from Property GuiBase2d.SelectionBehaviorDown
Removed Tag [NotBrowsable] from Property GuiBase2d.SelectionBehaviorLeft
Removed Tag [NotBrowsable] from Property GuiBase2d.SelectionBehaviorRight
Removed Tag [NotBrowsable] from Property GuiBase2d.SelectionBehaviorUp
Removed Tag [NotBrowsable] from Property GuiBase2d.SelectionGroup
Removed Tag [NotBrowsable] from Property GuiObject.SelectionOrder
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#527) for a syntax highlighted version!)
