## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/f25885d2c5159138f5714e279c56efec5a69caec

## API Changes

```plain
Added Class DynamicTextureLayerAlpha : Instance [NotCreatable] [NotReplicated]
	Added Property int DynamicTextureLayerAlpha.ZIndex

Added Property bool AirController.MaintainAngularMomentum
Added Property bool AirController.MaintainLinearMomentum
Added Property double BubbleChatConfiguration.BackgroundTransparency
Added Property bool Players.UseStrafingAnimations [NotReplicated] [NotScriptable]
Added Property Enum.ScreenInsets ScreenGui.ScreenInsets [<📁> LoadOnly] [NotBrowsable]
Added Property bool Studio.Display Team Create toggle when creating a new experience

Added Function DynamicTextureLayerAlpha DynamicTextureAlpha:CreateLayer()
Added Function void TeamCreateService:SendUnarchiveUniverseWithReasonAsync(int64 universeId, string reason) {RobloxScriptSecurity}
Added Function bool UGCValidationService:ValidateMeshBounds(string meshId, Vector3 meshScale, Vector3 boundsOffset, CFrame attachmentCF, CFrame handleCF) {RobloxScriptSecurity} [Yields]

Added Enum ScreenInsets
	Added EnumItem ScreenInsets.None : 0
	Added EnumItem ScreenInsets.DeviceSafeInsets : 1
	Added EnumItem ScreenInsets.CoreUISafeInsets : 2

Added Tag [Hidden] to Property Sound.IsPaused
Added Tag [Hidden] to Property Sound.IsPlaying

Changed the category of Property Sound.ChannelCount 
	from: "Data"
	  to: "Asset"

Changed the category of Property Sound.IsLoaded 
	from: "Data"
	  to: "Asset"

Changed the category of Property Sound.SoundId 
	from: "Data"
	  to: "Asset"

Changed the category of Property Sound.TimeLength 
	from: "Data"
	  to: "Asset"

Changed the category of Property Sound.RollOffMaxDistance 
	from: "Data"
	  to: "Emitter"

Changed the category of Property Sound.RollOffMinDistance 
	from: "Data"
	  to: "Emitter"

Changed the category of Property Sound.RollOffMode 
	from: "Data"
	  to: "Emitter"

Changed the category of Property Sound.IsPaused 
	from: "Data"
	  to: "Playback"

Changed the category of Property Sound.IsPlaying 
	from: "Data"
	  to: "Playback"

Changed the category of Property Sound.Looped 
	from: "Data"
	  to: "Playback"

Changed the category of Property Sound.PlaybackLoudness 
	from: "Data"
	  to: "Playback"

Changed the category of Property Sound.PlaybackSpeed 
	from: "Data"
	  to: "Playback"

Changed the category of Property Sound.Playing 
	from: "Data"
	  to: "Playback"

Changed the category of Property Sound.TimePosition 
	from: "Data"
	  to: "Playback"

Changed the category of Property Sound.Volume 
	from: "Data"
	  to: "Playback"

Changed the category of Property Sound.SoundGroup 
	from: "Data"
	  to: "Routing"

Changed the category of Property Speaker.RollOffMaxDistance 
	from: "Data"
	  to: "Emitter"

Changed the category of Property Speaker.RollOffMinDistance 
	from: "Data"
	  to: "Emitter"

Changed the category of Property Speaker.RollOffMode 
	from: "Data"
	  to: "Emitter"

Changed the category of Property Speaker.PlaybackLoudness 
	from: "Data"
	  to: "Playback"

Changed the category of Property Speaker.Volume 
	from: "Data"
	  to: "Playback"

Changed the category of Property Speaker.SoundGroup 
	from: "Data"
	  to: "Routing"
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#553) for a syntax highlighted version!)