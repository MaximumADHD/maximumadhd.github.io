## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/4163dfa201b6d7e9b7d4b8432fc67b9f752cc8ef

## API Changes

```plain
Added Property Font BubbleChatConfiguration.FontFace
Added Property Color3 ChatWindowConfiguration.BackgroundColor3
Added Property double ChatWindowConfiguration.BackgroundTransparency
Added Property Font ChatWindowConfiguration.FontFace
Added Property Color3 ChatWindowConfiguration.TextColor3
Added Property int64 ChatWindowConfiguration.TextSize
Added Property Color3 ChatWindowConfiguration.TextStrokeColor3
Added Property double ChatWindowConfiguration.TextStrokeTransparency
Added Property float ChatWindowConfiguration.HeightScale
Added Property float ChatWindowConfiguration.WidthScale

Added Function Variant UGCValidationService:GetPropertyValue(Instance instance, string property) {RobloxScriptSecurity}

Added Event AnimationStreamTrack.Stopped() {RobloxScriptSecurity}
Added Event Animator.AnimationStreamTrackPlayed(AnimationStreamTrack animationTrack) {RobloxScriptSecurity}

Added EnumItem AssetType.FontFamily : 73
Added EnumItem ModelStreamingMode.Persistent : 2

Added Tag [Hidden] to Property BubbleChatConfiguration.Font

Changed the serialization of Property RenderingTest.CFrame 
	from: [<📁> LoadOnly]
	  to: [<💾|📁> Saves|Loads]

Changed the value-type of Property ExperienceInviteOptions.InviteMessageId 
	from: int64
	  to: string

Removed Property ControllerManager.HipHeight
Removed Property GroundController.MaxSlopeAngle
Removed Property StudioData.SrcPlaceId
Removed Property StudioData.SrcUniverseId

Removed Function DebuggerUIService:SetCurrentFrameId

Removed Tag [NotReplicated] from Property RenderingTest.CFrame
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#551) for a syntax highlighted version!)
