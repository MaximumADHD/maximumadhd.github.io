## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/36c9072dabbdb1d4299957bfc76c8030a18d4d7f

## API Changes

```plain
Added Class RemoteCursorService : Instance [NotCreatable] [Service]

Added Class ServiceVisibilityService : Instance [NotCreatable] [Service]
	Added Property BinaryString ServiceVisibilityService.VisibleServices {RobloxSecurity}

Added Property string LuaSourceContainer.RuntimeSource {PluginSecurity} [NotReplicated]
Added Property Enum.VRScaling VRService.AutomaticScaling [NotReplicated]

Added Enum VRScaling
	Added EnumItem VRScaling.World : 0
	Added EnumItem VRScaling.Off : 1

Added EnumItem ConnectionError.DisconnectRomarkEndOfTest : 293

Added Tag [CustomLuaState] to Function AnimationTrack:AdjustSpeed
Added Tag [CustomLuaState] to Function AnimationTrack:AdjustWeight
Added Tag [CustomLuaState] to Function AnimationTrack:Play
Added Tag [CustomLuaState] to Function AnimationTrack:Stop

Changed the serialization of Property Workspace.SignalBehavior 
	from: [<💾|📁> Saves|Loads]
	  to: [<🕒> RuntimeOnly]

Changed the parameters of Function Actor:BindToMessage 
	from: (string name, Function function)
	  to: (string topic, Function function)

Changed the parameters of Function Actor:BindToMessageParallel 
	from: (string name, Function function)
	  to: (string topic, Function function)

Changed the parameters of Function Actor:SendMessage 
	from: (string name, Tuple message)
	  to: (string topic, Tuple message)

Changed the parameters of Function MarketplaceService:PerformPurchase 
	from: (Enum.InfoType infoType, int64 productId, int expectedPrice, string requestId, bool isRobloxPurchase)
	  to: (Enum.InfoType infoType, int64 productId, int expectedPrice, string requestId, bool isRobloxPurchase, string collectibleItemId = "", string collectibleProductId = "", string idempotencyKey = "")

Changed the parameters of Function MessageBusService:MakeRequest 
	from: (string protocolName, string methodName, Variant message, Function callback)
	  to: (string protocolName, string methodName, Variant message, Function callback, Variant customTelemetryData)

Removed Class CoreScriptBuilder

Removed Property Studio.Show Deployment Warnings

Removed EnumItem ConnectionError.DisconnectOutOfMemory
Removed EnumItem ConnectionError.DisconnectOutOfMemoryExitContinue
Removed EnumItem ConnectionError.DisconnectOutOfMemoryKeepPlayingExit
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#570) for a syntax highlighted version!)