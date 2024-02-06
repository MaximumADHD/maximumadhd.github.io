## Client Difference Log



## API Changes

```plain
Added Property DragDetector.PermissionPolicy: Enum.DragDetectorPermissionPolicy
Added Property PhysicsSettings.TorqueDrawScale: number {RobloxScriptSecurity}
Added Property Studio.DraggerActiveColor: Color3 {RobloxScriptSecurity}
Added Property Studio.DraggerMajorGridIncrement: number {RobloxScriptSecurity}
Added Property Studio.DraggerMaxSoftSnaps: number {RobloxScriptSecurity}
Added Property Studio.DraggerPassiveColor: Color3 {RobloxScriptSecurity}
Added Property Studio.DraggerShowHoverRuler: boolean {RobloxScriptSecurity}
Added Property Studio.DraggerShowMeasurement: boolean {RobloxScriptSecurity}
Added Property Studio.DraggerShowTargetSnap: boolean {RobloxScriptSecurity}
Added Property Studio.DraggerSoftSnapMarginFactor: number {RobloxScriptSecurity}
Added Property Studio.DraggerSummonMarginFactor: number {RobloxScriptSecurity}
Added Property Studio.DraggerTiltRotateDuration: number {RobloxScriptSecurity}
Added Property UserGameSettings.FramerateCap: number {RobloxScriptSecurity} [Hidden] [NotReplicated]

Added Function CollaboratorsService:RequestFlyToCollaborator(collaboratorId: number) -> () {RobloxScriptSecurity}
Added Function DragDetector:SetPermissionPolicyFunction(function: (...any) -> ...any) -> ()
Added Function Path2D:GetControlPoint(index: number) -> Path2DControlPoint {RobloxScriptSecurity}
Added Function Path2D:InsertControlPoint(index: number, point: Path2DControlPoint) -> () {RobloxScriptSecurity}
Added Function Path2D:RemoveControlPoint(index: number) -> () {RobloxScriptSecurity}
Added Function Path2D:UpdateControlPoint(index: number, point: Path2DControlPoint) -> () {RobloxScriptSecurity}
Added Function Player:SetChatTranslationSettingsLocaleId(locale: string) -> () {RobloxScriptSecurity}

Added Event Player.PlayerChatTranslationSettingsLocaleSetFromLua(newLocaleId: string) {RobloxSecurity} [Hidden]

Added Enum DragDetectorPermissionPolicy
	Added EnumItem DragDetectorPermissionPolicy.Nobody : 0
	Added EnumItem DragDetectorPermissionPolicy.Everybody : 1
	Added EnumItem DragDetectorPermissionPolicy.Scriptable : 2

Added Tag [Deprecated] to Property CylindricalConstraint.SoftlockAngularServoUponReachingTarget
Added Tag [Deprecated] to Property HingeConstraint.SoftlockServoUponReachingTarget
Added Tag [Deprecated] to Property SlidingBallConstraint.SoftlockServoUponReachingTarget
Added Tag [Hidden] to Property Collaborator.CFrame
Added Tag [Hidden] to Property Collaborator.CollaboratorColor
Added Tag [Hidden] to Property Collaborator.CurDocGUID
Added Tag [Hidden] to Property Collaborator.CurScriptLineNumber
Added Tag [Hidden] to Property Collaborator.IsIdle
Added Tag [Hidden] to Property Collaborator.UserId
Added Tag [Hidden] to Property Collaborator.Username

Changed the serialization of Property Collaborator.CFrame 
	from: [💾|📁 Serialized]
	  to: [🚫 None]

Changed the serialization of Property Collaborator.CollaboratorColor 
	from: [💾|📁 Serialized]
	  to: [🚫 None]

Changed the serialization of Property Collaborator.CurDocGUID 
	from: [💾|📁 Serialized]
	  to: [🚫 None]

Changed the serialization of Property Collaborator.CurScriptLineNumber 
	from: [💾|📁 Serialized]
	  to: [🚫 None]

Changed the serialization of Property Collaborator.IsIdle 
	from: [💾|📁 Serialized]
	  to: [🚫 None]

Changed the serialization of Property Collaborator.UserId 
	from: [💾|📁 Serialized]
	  to: [🚫 None]

Changed the serialization of Property Collaborator.Username 
	from: [💾|📁 Serialized]
	  to: [🚫 None]

Removed Event DataModelSession.DataModelCreated
Removed Event DataModelSession.DataModelWillBeDestroyed

Removed Tag [NotScriptable] from Property Collaborator.Status
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#611) for a syntax highlighted version!)