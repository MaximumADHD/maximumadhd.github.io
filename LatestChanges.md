## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/08dd45a6b678751912c9218d0f2277655d9874c9

## API Changes

```plain
Added Class ActivityHistoryService : Instance [NotCreatable] [Service] [NotReplicated]
	Added Event ActivityHistoryService.onEventNotificationReceived()

Added Class ProjectFolderService : Instance [NotCreatable] [Service] [NotReplicated]

Added Property ControllerManager.UpDirection: Vector3
Added Property PhysicsSettings.DrawConstraintsNetForce: boolean {RobloxScriptSecurity}
Added Property PhysicsSettings.DrawContactsNetForce: boolean {RobloxScriptSecurity}
Added Property PhysicsSettings.DrawTotalNetForce: boolean {RobloxScriptSecurity}
Added Property PhysicsSettings.EnableForceVisualizationSmoothing: boolean {RobloxScriptSecurity}
Added Property PhysicsSettings.ForceVisualizationSmoothingSteps: number {RobloxScriptSecurity}
Added Property VRService.AvatarGestures: boolean [NotBrowsable]

Added Function AdService:HideEudsaDisclosure() -> () {RobloxScriptSecurity}
Added Function CollaboratorsService:GetSelectionHighlightsEnabled() -> boolean {RobloxScriptSecurity}
Added Function CollaboratorsService:ToggleSelectionHighlights(showHighlights: boolean) -> () {RobloxScriptSecurity}
Added Function CollaboratorsService:ToggleTeamCreate(on: boolean) -> () {RobloxScriptSecurity}

Added Event AdService.ShowStaticEudsaDisclosure() {RobloxScriptSecurity}

Changed the category of Property VRService.AutomaticScaling 
	from: "Data"
	  to: "Behavior"

Changed the category of Property VRService.FadeOutViewOnCollision 
	from: "Data"
	  to: "Behavior"

Changed the category of Property VRService.GuiInputUserCFrame 
	from: "Data"
	  to: "Behavior"

Removed Class VisibilityService
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#612) for a syntax highlighted version!)