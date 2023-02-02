## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/12ef6506a721fbe52910de199c0d4a12d93d3c0e

## API Changes

```plain
Added Class CoreScriptDebuggingManagerHelper : Instance [NotCreatable] [Service]
Added Class SelectionHighlightManager : Instance [NotCreatable] [Service]

Added Function void ExperienceAuthService:scopeCheckUIComplete(string guid, Array scopes, Enum.ScopeCheckResult result, Dictionary metadata) {RobloxScriptSecurity}
Added Function void GuiService:SetPurchasePromptIsShown(bool isShown) {RobloxScriptSecurity}

Added Event CoreGui.UserGuiRenderingChanged(bool enabled, Instance guiAdornee, Enum.NormalId faceId, float horizontalCurvature) {RobloxScriptSecurity}
Added Event ExperienceAuthService.OpenAuthPrompt(string guid, Array scopes, Dictionary metadata) {RobloxScriptSecurity}
Added Event GuiService.PurchasePromptShown() {RobloxScriptSecurity}
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#561) for a syntax highlighted version!)