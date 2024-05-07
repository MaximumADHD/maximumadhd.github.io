## Client Difference Log



## API Changes

```plain
Added Class PlayerHydrationService : Instance [NotCreatable] [Service]
	Added Event PlayerHydrationService.PlayerHydration(userId: number, playerHydrationBlob: string, playerHydrationSignature: string) {RobloxSecurity} [Hidden]

Added Property Beam.LocalTransparencyModifier: number [Hidden] [NotReplicated]
Added Property EditableMesh.SkinningEnabled: boolean
Added Property ParticleEmitter.LocalTransparencyModifier: number [Hidden] [NotReplicated]
Added Property Trail.LocalTransparencyModifier: number [Hidden] [NotReplicated]

Added Function AvatarCreationService:GetAvatarGenerationConfig() -> { [string]: any } [Yields]
Added Function ExperienceService:StartCrossExperience(type: string, params: { [string]: any }) -> () {RobloxScriptSecurity}
Added Function ExperienceService:StopCrossExperience(type: string, params: { [string]: any }) -> () {RobloxScriptSecurity}

Added Event ExperienceService.OnCrossExperienceStarted(type: string, params: { [string]: any }) {RobloxScriptSecurity}
Added Event ExperienceService.OnCrossExperienceStopped(type: string, params: { [string]: any }) {RobloxScriptSecurity}

Added Enum JoinSource
	Added EnumItem JoinSource.CreatedItemAttribution : 1

Added Enum MarketplaceBulkPurchasePromptStatus
	Added EnumItem MarketplaceBulkPurchasePromptStatus.Completed : 1
	Added EnumItem MarketplaceBulkPurchasePromptStatus.Aborted : 2
	Added EnumItem MarketplaceBulkPurchasePromptStatus.Error : 3

Added Enum MarketplaceItemPurchaseStatus
	Added EnumItem MarketplaceItemPurchaseStatus.Success : 1
	Added EnumItem MarketplaceItemPurchaseStatus.SystemError : 2
	Added EnumItem MarketplaceItemPurchaseStatus.AlreadyOwned : 3
	Added EnumItem MarketplaceItemPurchaseStatus.InsufficientRobux : 4
	Added EnumItem MarketplaceItemPurchaseStatus.QuantityLimitExceeded : 5
	Added EnumItem MarketplaceItemPurchaseStatus.QuotaExceeded : 6
	Added EnumItem MarketplaceItemPurchaseStatus.NotForSale : 7
	Added EnumItem MarketplaceItemPurchaseStatus.NotAvailableForPurchaser : 8
	Added EnumItem MarketplaceItemPurchaseStatus.PriceMismatch : 9
	Added EnumItem MarketplaceItemPurchaseStatus.SoldOut : 10
	Added EnumItem MarketplaceItemPurchaseStatus.PurchaserIsSeller : 11
	Added EnumItem MarketplaceItemPurchaseStatus.InsufficientMembership : 12

Added Enum MarketplaceProductType
	Added EnumItem MarketplaceProductType.AvatarAsset : 1
	Added EnumItem MarketplaceProductType.AvatarBundle : 2

Added Tag [CustomLuaState] to Function Player:GetJoinData
Added Tag [NotScriptable] to Property Workspace.RenderingCacheOptimizations

Changed the category of Property ServiceVisibilityService.HiddenServices 
	from: "Data"
	  to: "Behavior"

Changed the serialization of Property Workspace.RenderingCacheOptimizations 
	from: [🚫 None]
	  to: [💾|📁 Serialized]

Changed the parameters of Function AssetManagerService:InsertMesh 
	from: (aliasName: string, insertWithLocation: boolean)
	  to: (aliasName: string, insertWithLocation: boolean, sourceAssetId: number)

Changed the parameters of Function AssetManagerService:InsertMeshesWithLocation 
	from: (aliasNames: { any })
	  to: (aliasNames: { any }, meshIds: { any })

Changed the parameters of Event GuiService.OpenAttenuationCurveEditor 
	from: (selectedCurveObject: Instance)
	  to: (selectedCurveObjects: { Instance })

Removed Tag [Hidden] from Property Workspace.RenderingCacheOptimizations
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#624) for a syntax highlighted version!)