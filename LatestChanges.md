## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/2886e94aff212265d69f1f299c66b250d23d817d

## API Changes

```plain
Added Class FaceAnimatorService : Instance [NotCreatable] [Service] [NotReplicated]
	Added Property bool FaceAnimatorService.AudioAnimationEnabled {RobloxScriptSecurity} [Hidden] [NotReplicated]
	Added Property bool FaceAnimatorService.FlipHeadOrientation {RobloxScriptSecurity} [Hidden] [NotReplicated]
	Added Property bool FaceAnimatorService.VideoAnimationEnabled {RobloxScriptSecurity} [Hidden] [NotReplicated]

Added Class ScriptCloneWatcherHelperV2 : Instance [NotCreatable] [Service] [NotReplicated]

Added Property string ReflectionMetadataItem.SliderScaling

Added Function Array CollectionService:GetAllTags() {🧬Safe}

Added Event CollectionService.TagAdded(string tag)
Added Event CollectionService.TagRemoved(string tag)
Added Event GuiBase2d.SelectionChanged(bool amISelected, GuiObject previousSelection, GuiObject newSelection)

Added EnumItem DeveloperMemoryTag.GeometryCSG : 24

Changed the serialization of Property MaterialService.Use2022Materials 
	from: [<📁> LoadOnly]
	  to: [<🕒> RuntimeOnly]

Removed Property Instance.PropertyStatusStudio
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#525) for a syntax highlighted version!)