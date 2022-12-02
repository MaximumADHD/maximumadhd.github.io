## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/facca6d4dd60f3aa42b7fb1606b7638c0e59a43f

## API Changes

```plain
Added Class ShorelineUpgraderService : Instance [NotCreatable] [Service] [NotReplicated]
	Added Function void ShorelineUpgraderService:Cancel() {RobloxScriptSecurity}
	Added Function void ShorelineUpgraderService:Start() {RobloxScriptSecurity}
	Added Event ShorelineUpgraderService.Status(float progressRatio) {RobloxScriptSecurity}

Added Property Color3 ChatInputBarConfiguration.BackgroundColor3
Added Property double ChatInputBarConfiguration.BackgroundTransparency
Added Property Font ChatInputBarConfiguration.FontFace
Added Property Color3 ChatInputBarConfiguration.PlaceholderColor3
Added Property Color3 ChatInputBarConfiguration.TextColor3
Added Property int64 ChatInputBarConfiguration.TextSize
Added Property Color3 ChatInputBarConfiguration.TextStrokeColor3
Added Property double ChatInputBarConfiguration.TextStrokeTransparency
Added Property CFrame IKControl.EndEffectorOffset
Added Property bool Player.HasVerifiedBadge
Added Property bool Terrain.ShorelinesUpgraded {RobloxScriptSecurity} [Hidden]

Added Function int IKControl:GetChainCount()
Added Function float IKControl:GetChainLength()
Added Function void StudioAssetService:PublishPackage(Instance instance, Dictionary publishInfo) {RobloxScriptSecurity}
Added Function bool Terrain:CanShorelinesBeUpgraded() {RobloxScriptSecurity}

Added Event StudioAssetService.OnPublishPackageResult(Dictionary result, string errorMessage) {RobloxScriptSecurity}

Added Tag [CustomLuaState] to Function HttpService:JSONEncode

Changed the serialization of Property ScreenGui.ScreenInsets 
	from: [<📁> LoadOnly]
	  to: [<💾|📁> Saves|Loads]

Changed the serialization of Property ScreenGui.IgnoreGuiInset 
	from: [<💾|📁> Saves|Loads]
	  to: [<📁> LoadOnly]

Changed the value of EnumItem VRSessionState.Undefined from 3 to 0
Changed the value of EnumItem VRSessionState.Idle from 0 to 1
Changed the value of EnumItem VRSessionState.Visible from 1 to 2
Changed the value of EnumItem VRSessionState.Focused from 2 to 3

Removed Property IKControl.AlignmentOffset
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#554) for a syntax highlighted version!)