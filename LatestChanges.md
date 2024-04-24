## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/094a6184596b5d4b1a1983e1dffc7dad7195ef05

## API Changes

```plain
Added Class GenericChallengeService : Instance [NotCreatable] [Service]
	Added Event GenericChallengeService.ChallengeRequiredEvent(challengeID: string, challengeType: string, challengeMetadata: string) {RobloxScriptSecurity}

Added Function AvatarChatService:EnableVoice() -> boolean {RobloxScriptSecurity}
Added Function AvatarChatService:deviceMeetsRequirementsForFeature(feature: Enum.DeviceFeatureType) -> boolean {RobloxScriptSecurity}
Added Function AvatarCreationService:CreateAvatarGenerationSessionAsync(player: Player) -> AvatarGenerationSession [Yields]
Added Function ConversationalAIAcceptanceService:ErrorTelemetry(requestId: string, errorType: string) -> () {RobloxScriptSecurity}
Added Function LayerCollector:GetGuiObjectsAtPosition(x: number, y: number) -> { Instance } {RobloxScriptSecurity}
Added Function Players:BanAsync(config: { [string]: any }) -> () [Yields]
Added Function Players:UnbanAsync(config: { [string]: any }) -> () [Yields]
Added Function ScriptEditorService:IsAutocompleteCallbackRegistered(name: string) -> boolean {RobloxScriptSecurity}
Added Function ScriptEditorService:IsScriptAnalysisCallbackRegistered(name: string) -> boolean {RobloxScriptSecurity}
Added Function StudioDeviceEmulatorService:ConnectGamepad(deviceId: number, gamepadDeviceType: Enum.GamepadType) -> () {RobloxScriptSecurity} [Yields]
Added Function StudioDeviceEmulatorService:DisconnectGamepad(deviceId: number) -> () {RobloxScriptSecurity} [Yields]

Added Event AvatarChatService.RefreshClientFeatures() {RobloxSecurity} [Hidden]
Added Event AvatarCreationService.ReplicateAvatarModel(id: string, success: boolean, serializedModel: string, bufferTable: { [string]: any }) {RobloxSecurity} [Hidden]
Added Event Player.PlayerCharacterLoaded(metrics: { [string]: any }) {RobloxSecurity} [Hidden]

Added Enum AnalyticsCustomFieldKeys
	Added EnumItem AnalyticsCustomFieldKeys.CustomField01 : 0
	Added EnumItem AnalyticsCustomFieldKeys.CustomField02 : 1
	Added EnumItem AnalyticsCustomFieldKeys.CustomField03 : 2

Added Enum DeviceFeatureType
	Added EnumItem DeviceFeatureType.DeviceCapture : 0

Changed the security of Property RunService.RunState 
	from: {RobloxScriptSecurity}
	  to: {PluginSecurity}

Changed the value-type of Property Avatar3DGenerationJob.Result 
	from: Model?
	  to: string

Changed the parameters of Function AnalyticsService:LogEconomyEvent 
	from: (player: Player, flowType: Enum.AnalyticsEconomyFlowType, currencyType: string, endingBalance: number, amount: number, transactionType: string, itemSku: string, customFields: { any })
	  to: (player: Player, flowType: Enum.AnalyticsEconomyFlowType, currencyType: string, endingBalance: number, amount: number, transactionType: string, itemSku: string? = "", customFields: { [string]: any }? = nil)

Changed the parameters of Function AnalyticsService:LogFunnelStepEvent 
	from: (player: Player, funnelName: string, step: number, customFields: { any })
	  to: (player: Player, funnelName: string, funnelSessionId: string? = "", step: number? = 0, stepName: string? = "", customFields: { [string]: any }? = nil)

Changed the parameters of Function AnalyticsService:LogOnboardingFunnelStepEvent 
	from: (player: Player, step: number, customFields: { any })
	  to: (player: Player, step: number, stepName: string? = "", customFields: { [string]: any }? = nil)

Changed the parameters of Function AnalyticsService:LogProgressionCompleteEvent 
	from: (player: Player, level: number, levelName: string, customFields: { any })
	  to: (player: Player, progressionPathName: string, level: number, levelName: string? = "", customFields: { [string]: any }? = nil)

Changed the parameters of Function AnalyticsService:LogProgressionEvent 
	from: (player: Player, status: Enum.AnalyticsProgressionType, level: number, levelName: string, customFields: { any })
	  to: (player: Player, progressionPathName: string, status: Enum.AnalyticsProgressionType, level: number, levelName: string? = "", customFields: { [string]: any }? = nil)

Changed the parameters of Function AnalyticsService:LogProgressionFailEvent 
	from: (player: Player, level: number, levelName: string, customFields: { any })
	  to: (player: Player, progressionPathName: string, level: number, levelName: string? = "", customFields: { [string]: any }? = nil)

Changed the parameters of Function AnalyticsService:LogProgressionStartEvent 
	from: (player: Player, level: number, levelName: string, customFields: { any })
	  to: (player: Player, progressionPathName: string, level: number, levelName: string? = "", customFields: { [string]: any }? = nil)

Changed the parameters of Function HttpService:GetAsync 
	from: (url: string, nocache: boolean? = false, headers: any)
	  to: (url: any, nocache: boolean? = false, headers: any)

Changed the parameters of Function HttpService:PostAsync 
	from: (url: string, data: string, content_type: Enum.HttpContentType? = "ApplicationJson", compress: boolean? = false, headers: any)
	  to: (url: any, data: string, content_type: Enum.HttpContentType? = "ApplicationJson", compress: boolean? = false, headers: any)

Changed the parameters of Function StreamingService:RunSandboxedCode 
	from: (requestId: string, code: string)
	  to: (requestId: string, runCodeGuid: string, defaultCode: string? = "")

Removed Event AvatarCreationService.ReplicateAvatarTempAssetIds

Removed Tag [Hidden] from Property RunService.RunState
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#622) for a syntax highlighted version!)