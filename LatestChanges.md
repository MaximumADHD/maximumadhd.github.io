## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/181c8fd8e8f61d3a81486c649a17c913dbdb056f

## API Changes

```plain
Added Function Dictionary TextService:GetFontMemoryData() {RobloxScriptSecurity}
Added Function string VoiceChatInternal:GetSessionId() {RobloxScriptSecurity}
Added Function string VoiceChatInternal:GetVoiceExperienceId() {RobloxScriptSecurity}
Added Function string WorldRoot:CacheCurrentTerrain(string id, Vector3 center, float radius) {RobloxScriptSecurity}
Added Function bool WorldRoot:ClearCachedTerrain(string id) {RobloxScriptSecurity}
Added Function RaycastResult WorldRoot:RaycastCachedTerrain(string id, Vector3 origin, Vector3 direction, bool ignoreWater) {RobloxScriptSecurity}

Added EnumItem ConnectionError.PlayerRemoved : 291

Added Tag [NotReplicated] to Property AlignOrientation.PrimaryAxis
Added Tag [NotReplicated] to Property AlignOrientation.SecondaryAxis

Changed the serialization of Property ChatWindowConfiguration.HorizontalAlignment 
	from: [<📁> LoadOnly]
	  to: [<💾|📁> Saves|Loads]

Changed the serialization of Property ChatWindowConfiguration.VerticalAlignment 
	from: [<📁> LoadOnly]
	  to: [<💾|📁> Saves|Loads]

Removed Property Bone.IsCFrameDriven

Removed Tag [NotReplicated] from Property ChatWindowConfiguration.HorizontalAlignment
Removed Tag [NotReplicated] from Property ChatWindowConfiguration.VerticalAlignment
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#552) for a syntax highlighted version!)