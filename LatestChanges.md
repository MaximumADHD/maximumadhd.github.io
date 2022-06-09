## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/b59ca4152f1ceaedfd998eb1f7bc54002f6da63f

## API Changes

```plain
Added Function bool ScriptDocument:EditTextAsync(string newText, int startLine, int startCharacter, int endLine, int endCharacter) {RobloxScriptSecurity} [Yields]
Added Function void StudioService:DEPRECATED_EmitPlacePublishedSignal() {RobloxScriptSecurity}
Added Function void StudioService:DEPRECATED_RefreshDocumentDisplayName() {RobloxScriptSecurity}
Added Function void StudioService:DEPRECATED_SetUniverseDisplayName(string newName) {RobloxScriptSecurity}
Added Function void StudioService:DEPRECATED_ShowSaveOrPublishPlaceToRoblox(bool showGameSelect, bool isPublish, Enum.StudioCloseMode closeMode) {RobloxScriptSecurity}
Added Function void StudioService:DEPRECATED_publishAs(int64 universeId, int64 placeId, int64 groupId) {RobloxScriptSecurity}

Added Event StudioService.DEPRECATED_GameNameUpdated(string name) {RobloxScriptSecurity}
Added Event StudioService.DEPRECATED_GamePublishFinished(bool success, int64 gameId) {RobloxScriptSecurity}
Added Event StudioService.DEPRECATED_OnPublishPlaceToRoblox(bool isOverwritePublish) {RobloxScriptSecurity}
Added Event StudioService.DEPRECATED_OnSaveOrPublishPlaceToRoblox(bool showGameSelect, bool isPublish, Enum.StudioCloseMode closeMode) {RobloxScriptSecurity}

Moved Function RefreshDocumentDisplayName
	from: Class StudioService
	  to: Class StudioPublishService

Moved Function SetUniverseDisplayName
	from: Class StudioService
	  to: Class StudioPublishService

Moved Function ShowSaveOrPublishPlaceToRoblox
	from: Class StudioService
	  to: Class StudioPublishService

Moved Event GameNameUpdated
	from: Class StudioService
	  to: Class StudioPublishService

Moved Event GamePublishFinished
	from: Class StudioService
	  to: Class StudioPublishService

Moved Event OnSaveOrPublishPlaceToRoblox
	from: Class StudioService
	  to: Class StudioPublishService

Removed Function StudioService:EmitPlacePublishedSignal
Removed Function StudioService:PublishAs

Removed Event StudioService.OnPublishPlaceToRoblox

Removed Tag [Hidden] from Property SurfaceAppearance.TexturePack
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#530) for a syntax highlighted version!)