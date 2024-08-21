## Client Difference Log



## API Changes

```plain
Added Function AdGui:GetSingleReportAdInfo() -> { [string]: any } {RobloxScriptSecurity}
Added Function MarketplaceService:PerformCancelSubscription(subscriptionId: string) -> () {RobloxScriptSecurity} [Yields]
Added Function MarketplaceService:SignalUserSubscriptionStatusChanged(subscriptionId: string) -> () {RobloxScriptSecurity}
Added Function RTAnimationTracker:Step() -> () {RobloxScriptSecurity}

Added Event MarketplaceService.UserSubscriptionStatusChanged(subscriptionId: string) {RobloxScriptSecurity}

Added Enum VRDeviceType
	Added EnumItem VRDeviceType.Unknown : 0
	Added EnumItem VRDeviceType.OculusRift : 1
	Added EnumItem VRDeviceType.HTCVive : 2
	Added EnumItem VRDeviceType.ValveIndex : 3
	Added EnumItem VRDeviceType.OculusQuest : 4

Added EnumItem Platform.MetaOS : 20

Changed the parameters of Event BaseWrap.VerticesModified 
	from: ()
	  to: (vertices: { any })

Changed the value of EnumItem Platform.None from 20 to 21
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#639) for a syntax highlighted version!)