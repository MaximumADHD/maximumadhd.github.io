## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/a8194de65aa34b878ea1645027c9d3f8b15e9cea

## API Changes

```plain
Added Property bool RenderingTest.PerfTest

Added Function string ScriptEditorService:GetEditorSource(LuaSourceContainer script) {PluginSecurity}

Added Enum WeldConstraintPreserve
	Added EnumItem WeldConstraintPreserve.All : 0
	Added EnumItem WeldConstraintPreserve.None : 1
	Added EnumItem WeldConstraintPreserve.Touching : 2

Added EnumItem PartType.Wedge : 3 [NotBrowsable]
Added EnumItem PartType.CornerWedge : 4 [NotBrowsable]

Added Tag [Deprecated] to Property StudioService.DrawConstraintsOnTop

Removed Class Speaker
	Removed Property Speaker.ChannelCount
	Removed Property Speaker.Source
	Removed Property Speaker.RollOffMaxDistance
	Removed Property Speaker.RollOffMinDistance
	Removed Property Speaker.RollOffMode
	Removed Property Speaker.PlaybackLoudness
	Removed Property Speaker.Volume
	Removed Property Speaker.SoundGroup

Removed Tag [Hidden] from Property ChatInputBarConfiguration.KeyboardKeyCode
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#575) for a syntax highlighted version!)