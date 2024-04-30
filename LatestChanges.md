## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/04ab62513d220b3074c6433941864a705e0833f5

## API Changes

```plain
Added Property DraggerService.PartSnapEnabled: boolean {RobloxScriptSecurity} [ReadOnly]
Added Property StudioService.Secrets: string {RobloxScriptSecurity}
Added Property SurfaceAppearance.Color: Color3
Added Property Workspace.RenderingCacheOptimizations: Enum.RenderingCacheOptimizationMode [Hidden]

Added Function DataModelPatchService:GetLuaVersion(patchName: string) -> string {RobloxScriptSecurity}
Added Function GenericChallengeService:SignalChallengeAbandoned(challengeID: string) -> () {RobloxScriptSecurity}
Added Function GenericChallengeService:SignalChallengeCompleted(challengeID: string, challengeType: string, challengeMetadata: string) -> () {RobloxScriptSecurity}
Added Function GenericChallengeService:SignalChallengeInvalidated(challengeID: string) -> () {RobloxScriptSecurity}
Added Function GenericChallengeService:SignalChallengeLoaded(challengeID: string, success: boolean) -> () {RobloxScriptSecurity}
Added Function GenericChallengeService:SignalChallengeRequired(challengeID: string, challengeType: string, challengeMetadata: string) -> () {RobloxScriptSecurity}
Added Function Plugin:GetUri() -> { [string]: any } {RobloxScriptSecurity}
Added Function UserGameSettings:GetDefaultFramerateCap() -> number {RobloxScriptSecurity}

Added Event GenericChallengeService.ChallengeAbandonedEvent(challengeID: string) {RobloxScriptSecurity}
Added Event GenericChallengeService.ChallengeCompletedEvent(challengeID: string, challengeType: string, challengeMetadata: string) {RobloxScriptSecurity}
Added Event GenericChallengeService.ChallengeInvalidatedEvent(challengeID: string) {RobloxScriptSecurity}
Added Event GenericChallengeService.ChallengeLoadedEvent(challengeID: string, success: boolean) {RobloxScriptSecurity}

Added Enum RenderingCacheOptimizationMode
	Added EnumItem RenderingCacheOptimizationMode.Default : 0
	Added EnumItem RenderingCacheOptimizationMode.Disabled : 1
	Added EnumItem RenderingCacheOptimizationMode.Enabled : 2

Changed the parameters of Function AnalyticsService:LogEconomyEvent 
	from: (player: Player, flowType: Enum.AnalyticsEconomyFlowType, currencyType: string, endingBalance: number, amount: number, transactionType: string, itemSku: string? = "", customFields: { [string]: any }? = nil)
	  to: (player: Player, flowType: Enum.AnalyticsEconomyFlowType, currencyType: string, amount: number, endingBalance: number, transactionType: string, itemSku: string? = "", customFields: { [string]: any }? = nil)

Removed Event Player.ReceivedJoinTelemetry

Removed Tag [NotReplicated] from Class EditableImage
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#623) for a syntax highlighted version!)