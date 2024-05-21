## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/3ffa86b7abdf11e3b3c8aa26b208a9886ae18c2d

## API Changes

```plain
Added Property Explosion.LocalTransparencyModifier: number [Hidden] [NotReplicated]
Added Property Fire.LocalTransparencyModifier: number [Hidden] [NotReplicated]
Added Property Smoke.LocalTransparencyModifier: number [Hidden] [NotReplicated]
Added Property Sparkles.LocalTransparencyModifier: number [Hidden] [NotReplicated]

Added Function AvatarCreationService:SendAnalyticsEvent(eventName: string, params: { [string]: any }) -> ()

Added EnumItem MarketplaceItemPurchaseStatus.PlaceInvalid : 13

Changed the parameters of Function ConversationalAIAcceptanceService:CodeRunnerActivated 
	from: (requestId: string, code: string)
	  to: (requestId: string, code: string, serverAutorun: boolean, autorunEnabled: boolean, autoExpandDropdowns: boolean)

Changed the security of Function InsertService:CreateMeshPartAsync 
	from: {PluginSecurity}
	  to: {None}

Changed the parameters of Event CaptureService.CaptureSavedInternal 
	from: (captureInfo: { [string]: any })
	  to: (captureInfo: { [string]: any }, triggerSource: string)

Removed Property Studio.Server Audio Behavior

Removed Enum ServerAudioBehavior
	Removed EnumItem ServerAudioBehavior.Enabled
	Removed EnumItem ServerAudioBehavior.Muted
	Removed EnumItem ServerAudioBehavior.OnlineGame
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#626) for a syntax highlighted version!)