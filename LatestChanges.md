## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/ebf4d5bb7ea532a26a3d2376363b90d71b00b5e5

## API Changes

```plain
Added Property float GroundController.GroundOffset

Added Function void GuiService:SetHardwareSafeAreaInsets(float left, float top, float right, float bottom) {RobloxScriptSecurity}
Added Function void MarketplaceService:PromptNativePurchaseWithLocalPlayer(string productId) {RobloxScriptSecurity}
Added Function bool PhysicsService:IsCollisionGroupRegistered(string name)
Added Function void Player:SetExperienceSettingsLocaleId(string locale) {RobloxScriptSecurity}
Added Function void ScriptEditorService:DeregisterAutocompleteCallback(string name) {PluginSecurity}

Added Event MarketplaceService.NativePurchaseFinishedWithLocalPlayer(string productId, bool wasPurchased) {RobloxScriptSecurity}
Added Event TeleportService.MenuTeleportAttempt() {RobloxScriptSecurity}

Added Tags [Hidden] [NotReplicated] to Property ControllerManager.HipHeight
Added Tags [Hidden] [NotReplicated] to Property GroundController.MaxSlopeAngle

Changed the serialization of Property ControllerManager.HipHeight 
	from: [<💾|📁> Saves|Loads]
	  to: [<🕒> RuntimeOnly]

Changed the serialization of Property GroundController.MaxSlopeAngle 
	from: [<💾|📁> Saves|Loads]
	  to: [<🕒> RuntimeOnly]

Changed the parameters of Function ScriptEditorService:RegisterAutocompleteCallback 
	from: (Function callbackFunction)
	  to: (string name, int priority, Function callbackFunction)

Changed the value of EnumItem IKControlType.Transform from 3 to 0
Changed the value of EnumItem IKControlType.LookAt from 4 to 3

Removed Property IKControl.Pole

Removed EnumItem IKControlType.Null
Removed EnumItem IKControlType.Length

Removed Tag [NotBrowsable] from Class CanvasGroup
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#546) for a syntax highlighted version!)