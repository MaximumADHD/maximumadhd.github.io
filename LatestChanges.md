## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/b98eb484bcb0bec939ea97d8a018ad4ba1af912f

## API Changes

```plain
Added Class DeviceIdService : Instance [NotCreatable] [Service] [NotReplicated]
	Added Function string DeviceIdService:GetDeviceId() {RobloxScriptSecurity}

Added Class ScreenshotHud : Instance [NotCreatable] [NotReplicated]
	Added Property Content ScreenshotHud.CameraButtonIcon
	Added Property UDim2 ScreenshotHud.CameraButtonPosition
	Added Property UDim2 ScreenshotHud.CloseButtonPosition
	Added Property bool ScreenshotHud.ExperienceNameOverlayEnabled
	Added Property Enum.Font ScreenshotHud.OverlayFont
	Added Property bool ScreenshotHud.UsernameOverlayEnabled
	Added Property bool ScreenshotHud.CloseWhenScreenshotTaken
	Added Property bool ScreenshotHud.Visible

Added Property string BasePart.CollisionGroup {RobloxScriptSecurity} [<📁> LoadOnly] [Hidden] [NotReplicated]
Added Property Content PackageLink.Package Id [ReadOnly] [NotScriptable]
Added Property int64 PackageLink.Version Number [NotReplicated] [NotScriptable]
Added Property QDir Studio.IconOverrideDir {RobloxScriptSecurity}

Added Function string ScriptDocument:GetLine(int lineIndex = -1234567) {PluginSecurity}
Added Function int ScriptDocument:GetLineCount() {PluginSecurity}

Added Callback Objects Plugin.ProcessAssetInsertionDrag(string assetId, int assetTypeId, Objects instances) {RobloxScriptSecurity} [NoYield]
Added Callback void Plugin.ProcessAssetInsertionDrop() {RobloxScriptSecurity} [NoYield]

Added Tag [Hidden] to Property PackageLink.PackageId
Added Tag [Hidden] to Property PackageLink.VersionNumber

Changed the serialization of Property PackageLink.VersionNumber 
	from: [<📁> LoadOnly]
	  to: [<🕒> RuntimeOnly]

Changed the security of Function ScriptDocument:EditTextAsync 
	from: {RobloxScriptSecurity}
	  to: {PluginSecurity}

Changed the security of Function ScriptDocument:GetScript 
	from: {RobloxScriptSecurity}
	  to: {PluginSecurity}

Changed the security of Function ScriptDocument:IsCommandBar 
	from: {RobloxScriptSecurity}
	  to: {PluginSecurity}

Changed the security of Function ScriptEditorService:FindScriptDocument 
	from: {RobloxScriptSecurity}
	  to: {PluginSecurity}

Changed the security and parameters of Function ScriptDocument:GetText 
	from: {RobloxScriptSecurity} ()
	  to: {PluginSecurity} (int startLine = -1234567, int startCharacter = -1234567, int endLine = -1234567, int endCharacter = -1234567)

Changed the security of Event ScriptEditorService.TextDocumentDidChange 
	from: {RobloxScriptSecurity}
	  to: {PluginSecurity}

Changed the security of Event ScriptEditorService.TextDocumentDidClose 
	from: {RobloxScriptSecurity}
	  to: {PluginSecurity}

Changed the security of Event ScriptEditorService.TextDocumentDidOpen 
	from: {RobloxScriptSecurity}
	  to: {PluginSecurity}

Removed Function ScriptDocument:GetNumLines
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#532) for a syntax highlighted version!)