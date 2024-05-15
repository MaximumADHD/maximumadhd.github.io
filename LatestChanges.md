## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/e2b41cdc193ca26fb759d4fd518deadca2587607

## API Changes

```plain
Added Class BanHistoryPages : Pages [NotCreatable] [NotReplicated]

Added Function CaptureService:OnCaptureShared(capturePath: string) -> () {RobloxScriptSecurity}
Added Function CaptureService:SaveCapturesToExternalStorageAsync(pathArr: { any }) -> number {RobloxScriptSecurity} [Yields]
Added Function MarketplaceService:PerformBulkPurchase(orderRequest: { [string]: any }, options: { [string]: any }) -> { [string]: any } {RobloxScriptSecurity} [Yields]
Added Function MarketplaceService:PromptBulkPurchase(player: Player, lineItems: { any }, options: { [string]: any }) -> ()
Added Function MarketplaceService:SignalPromptBulkPurchaseFinished(status: Enum.MarketplaceBulkPurchasePromptStatus, results: { [string]: any }) -> () {RobloxScriptSecurity}
Added Function MaterialGenerationService:DEPRECATED_GenerateMaterialVariantsAync(prompt: string, samples: number) -> { Instance } {RobloxScriptSecurity} [Yields]
Added Function Players:GetBanHistoryAsync(userId: number) -> BanHistoryPages [Yields]
Added Function StreamingService:BindCodeToGuid(runCodeGuid: string, code: string) -> ...any {RobloxScriptSecurity} [Yields]

Added Event CaptureService.OnCaptureSignatureResult(content: string, signature: string, signatureVersion: number) {RobloxSecurity} [Hidden]
Added Event CaptureService.RequestCaptureSignature(content: string) {RobloxSecurity} [Hidden]
Added Event MarketplaceService.PromptBulkPurchaseFinished(player: Instance, status: Enum.MarketplaceBulkPurchasePromptStatus, results: { [string]: any })
Added Event MarketplaceService.PromptBulkPurchaseRequested(player: Instance, displayData: { any }, orderRequest: { [string]: any }, purchaserRobuxBalance: number, orderTotalRobux: number, options: { [string]: any }) {RobloxScriptSecurity}

Added Enum UIDragDetectorDragStyle
	Added EnumItem UIDragDetectorDragStyle.TranslatePlane : 0
	Added EnumItem UIDragDetectorDragStyle.TranslateLine : 1
	Added EnumItem UIDragDetectorDragStyle.Rotate : 2
	Added EnumItem UIDragDetectorDragStyle.Scriptable : 3

Added Enum UIDragDetectorResponseStyle
	Added EnumItem UIDragDetectorResponseStyle.Offset : 0
	Added EnumItem UIDragDetectorResponseStyle.Scale : 1
	Added EnumItem UIDragDetectorResponseStyle.CustomOffset : 2
	Added EnumItem UIDragDetectorResponseStyle.CustomScale : 3

Changed the category of Property AudioEmitter.DistanceAttenuation 
	from: "Data"
	  to: "Emission"

Changed the parameters of Function StreamingService:RunSandboxedCode 
	from: (requestId: string, runCodeGuid: string, defaultCode: string? = "")
	  to: (runCodeGuid: string, requestId: string)

Removed Tag [NotReplicated] from Class CaptureService
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#625) for a syntax highlighted version!)