## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/21b4b88645e037c6edb0264169a47dcb04d25b0e

## API Changes

```plain
Added Property Instance.Sandboxed: boolean {RobloxSecurity} [NotReplicated] [NotScriptable]
Added Property UserGameSettings.MasterVolumeStudio: number {RobloxScriptSecurity}

Added Function AnalyticsService:LogEconomyEvent(player: Player, flowType: Enum.AnalyticsEconomyFlowType, currencyType: string, endingBalance: number, amount: number, transactionType: string, itemSku: string, customFields: { any }) -> ()
Added Function AnalyticsService:LogFunnelStepEvent(player: Player, funnelName: string, step: number, customFields: { any }) -> ()
Added Function AnalyticsService:LogOnboardingFunnelStepEvent(player: Player, step: number, customFields: { any }) -> ()
Added Function AnalyticsService:LogProgressionCompleteEvent(player: Player, level: number, levelName: string, customFields: { any }) -> ()
Added Function AnalyticsService:LogProgressionEvent(player: Player, status: Enum.AnalyticsProgressionType, level: number, levelName: string, customFields: { any }) -> ()
Added Function AnalyticsService:LogProgressionFailEvent(player: Player, level: number, levelName: string, customFields: { any }) -> ()
Added Function AnalyticsService:LogProgressionStartEvent(player: Player, level: number, levelName: string, customFields: { any }) -> ()
Added Function AssetService:CreateMeshPartAsync(meshId: string, options: { [string]: any }? = nil) -> MeshPart {PluginSecurity} [Yields]
Added Function Plugin:GetPluginComponent(name: string) -> { [string]: any } {RobloxScriptSecurity} [CustomLuaState]
Added Function ScriptEditorService:StripComments(code: string) -> string {RobloxScriptSecurity}
Added Function StudioDeviceEmulatorService:SendGamepadEvent(deviceId: number, keyCode: Enum.KeyCode, position: Vector3, rotation: Vector3) -> () {RobloxScriptSecurity} [Yields]

Added Event BaseWrap.VerticesModified() {RobloxScriptSecurity}
Added Event ProjectFolderService.FileChangedAfterSync() {RobloxScriptSecurity}

Added Enum AnalyticsEconomyFlowType
	Added EnumItem AnalyticsEconomyFlowType.Sink : 0
	Added EnumItem AnalyticsEconomyFlowType.Source : 1

Added Enum AnalyticsEconomyTransactionType
	Added EnumItem AnalyticsEconomyTransactionType.IAP : 0
	Added EnumItem AnalyticsEconomyTransactionType.Shop : 1
	Added EnumItem AnalyticsEconomyTransactionType.Gameplay : 2
	Added EnumItem AnalyticsEconomyTransactionType.ContextualPurchase : 3
	Added EnumItem AnalyticsEconomyTransactionType.TimedReward : 4
	Added EnumItem AnalyticsEconomyTransactionType.Onboarding : 5

Added Enum AnalyticsProgressionType
	Added EnumItem AnalyticsProgressionType.Custom : 0
	Added EnumItem AnalyticsProgressionType.Start : 1
	Added EnumItem AnalyticsProgressionType.Fail : 2
	Added EnumItem AnalyticsProgressionType.Complete : 3

Added EnumItem ConnectionError.PlacelaunchCreatorBan : 600
Added EnumItem Font.Arimo : 50
Added EnumItem Font.ArimoBold : 51

Added Tags [NotCreatable] [NotReplicated] to Class AnalyticsService

Changed the category of Property Instance.Capabilities 
	from: "Behavior"
	  to: "Permissions"

Changed the category of Property Instance.DefinesCapabilities 
	from: "Behavior"
	  to: "Permissions"

Changed the parameters of Function EditableMesh:CreateMeshPartAsync 
	from: (collisionFidelity: Enum.CollisionFidelity)
	  to: (options: { [string]: any }? = nil)

Changed the parameters of Function LogReporterService:ReportLog 
	from: (logId: string, desc: string)
	  to: (fingerprint: string, uuid: string, desc: string, attributes: { [string]: any }, annotations: { [string]: any })

Changed the parameters of Function StreamingService:GetInstance 
	from: (collectorName: string, requestId: string? = "instanceId")
	  to: (requestId: string, instanceId: string)

Removed Tag [Hidden] from Property Instance.Capabilities
Removed Tag [Preliminary] from Class AnalyticsService
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#619) for a syntax highlighted version!)