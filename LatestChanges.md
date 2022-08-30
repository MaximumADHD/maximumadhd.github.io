## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/7286fee38712dfe5d9161a7e14f236f31397ca3a

## API Changes

```plain
Added Class IKControl : Instance [NotBrowsable]
	Added Property Instance IKControl.ChainRoot
	Added Property bool IKControl.Enabled
	Added Property Instance IKControl.EndEffector
	Added Property Instance IKControl.Pole
	Added Property int IKControl.Priority
	Added Property Instance IKControl.Target
	Added Property Enum.IKControlType IKControl.Type
	Added Property float IKControl.Weight

Added Class ImporterFacsSettings : ImporterBaseSettings [NotCreatable] [NotReplicated]

Added Property bool BaseScript.Enabled [NotReplicated]

Added Function Tuple ScriptEditorService:OpenScriptDocumentAsync(LuaSourceContainer script) {PluginSecurity} [Yields]

Added Enum IKControlType
	Added EnumItem IKControlType.Null : 0
	Added EnumItem IKControlType.Position : 1
	Added EnumItem IKControlType.Rotation : 2
	Added EnumItem IKControlType.Transform : 3
	Added EnumItem IKControlType.LookAt : 4
	Added EnumItem IKControlType.Length : 5

Added Tag [NotBrowsable] to Class ControllerManager
Added Tag [NotBrowsable] to Class AirController
Added Tag [NotBrowsable] to Class ClimbController
Added Tag [NotBrowsable] to Class GroundController
Added Tag [NotBrowsable] to Class SwimController

Changed the security and serialization of Property BasePart.CollisionGroup 
	from: {RobloxScriptSecurity} [<📁> LoadOnly]
	  to: {None} [<💾|📁> Saves|Loads]

Changed the serialization of Property AlignOrientation.PrimaryAxis 
	from: [<💾|📁> Saves|Loads]
	  to: [<🕒> RuntimeOnly]

Changed the serialization of Property AlignOrientation.SecondaryAxis 
	from: [<💾|📁> Saves|Loads]
	  to: [<🕒> RuntimeOnly]

Changed the security of Function AvatarEditorService:ConformToAvatarRules 
	from: {RobloxScriptSecurity}
	  to: {None}

Changed the value of EnumItem LSPMethodType.TextDocument_publishDiagnostics from 20 to 21
Changed the value of EnumItem LSPMethodType.Window_showMessage from 21 to 22
Changed the value of EnumItem LSPMethodType.Window_showMessageRequest from 22 to 23
Changed the value of EnumItem LSPMethodType.Roblox_registerSyntaxCategories from 23 to 24
Changed the value of EnumItem LSPMethodType.Roblox_signalQuiescence from 24 to 25
Changed the value of EnumItem LSPMethodType.Roblox_syntaxHighlight from 25 to 26
Changed the value of EnumItem LSPMethodType.Roblox_suggestExtraSelections from 26 to 27
Changed the value of EnumItem LSPMethodType.Roblox_findExecutablePosition from 27 to 28
Changed the value of EnumItem LSPMethodType.Roblox_findColor3 from 28 to 29
Changed the value of EnumItem LSPMethodType.Roblox_patchSnippetData from 29 to 30

Removed Tag [Hidden] from Property BasePart.CollisionGroup
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#542) for a syntax highlighted version!)