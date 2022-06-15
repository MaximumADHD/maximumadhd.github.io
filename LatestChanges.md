## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/97d100426f1c7ae7b0d2e70aece2e2cc0abd7a0d

## API Changes

```plain
Added Class CustomSoundEffect : SoundEffect [NotCreatable]

Added Property bool Breakpoint.Valid {RobloxScriptSecurity} [Hidden] [ReadOnly]
Added Property bool ImporterMeshSettings.CageUVMatched [ReadOnly]
Added Property bool ImporterMeshSettings.CageUVMatchedPreview
Added Property bool ImporterMeshSettings.UseImportedPivot
Added Property bool MetaBreakpoint.Valid {RobloxScriptSecurity} [Hidden] [ReadOnly]

Added Function string ScriptDocument:GetInternalUri() {RobloxScriptSecurity}
Added Function bool ScriptDocument:IsCommandBar() {RobloxScriptSecurity}

Added Event DebuggerUIService.ExpressionAdded(string expression) {RobloxScriptSecurity}

Added EnumItem ConnectionError.Unknown : 1

Changed the superclass of Class ChannelSelectorSoundEffect 
	from: "CustomDspSoundEffect"
	  to: "CustomSoundEffect"

Changed the parameters and return-type of Function ScriptDocument:EditTextAsync 
	from: (string newText, int startLine, int startCharacter, int endLine, int endCharacter) -> bool
	  to: (string newText, int startLine, int startCharacter, int endLine = -1, int endCharacter = -1) -> Tuple

Removed Class CustomDspSoundEffect
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#531) for a syntax highlighted version!)