## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/3290b77f89aec15d628db55f79badee2002a9e8d

## API Changes

```plain
Added Class AvatarChatService : Instance [NotCreatable] [Service]
	Added Property int AvatarChatService.ClientFeatures {RobloxScriptSecurity} [Hidden] [ReadOnly]
	Added Property int AvatarChatService.ClientFeaturesInitialized {RobloxScriptSecurity} [Hidden] [ReadOnly]
	Added Property int AvatarChatService.ServerFeatures {RobloxScriptSecurity} {✏️RobloxSecurity} [Hidden]
	Added Function int AvatarChatService:GetClientFeaturesAsync() {RobloxScriptSecurity} [Yields]
	Added Function int AvatarChatService:GetServerFeaturesAsync() {RobloxScriptSecurity} [Yields]
	Added Function bool AvatarChatService:IsEnabled(int mask, Enum.AvatarChatServiceFeature feature) {RobloxScriptSecurity}
	Added Function bool AvatarChatService:IsPlaceEnabled() {RobloxScriptSecurity}
	Added Function bool AvatarChatService:IsUniverseEnabled() {RobloxScriptSecurity}
	Added Function int AvatarChatService:PollClientFeatures() {RobloxScriptSecurity}
	Added Function int AvatarChatService:PollServerFeatures() {RobloxScriptSecurity}

Added Class FacialAnimationStreamingSubsessionStats : Instance [NotCreatable] [NotReplicated]

Added Property Enum.ForceLimitMode AlignPosition.ForceLimitMode [NotBrowsable]
Added Property Enum.ActuatorRelativeTo AlignPosition.ForceRelativeTo
Added Property Vector3 AlignPosition.MaxAxesForce
Added Property bool Selection.DEPRECATED_ShowBoundingBox {RobloxScriptSecurity} [Hidden]
Added Property Enum.SelectionRenderMode Selection.RenderMode {RobloxScriptSecurity} [Hidden] [ReadOnly]
Added Property StyleSheet StyleDerive.StyleSheet
Added Property StyleSheet StyleLink.StyleSheet

Added Function Map AssetImportService:GetAllTemplates() {RobloxScriptSecurity}
Added Function Map AssetImportService:GetTemplate(string name) {RobloxScriptSecurity}
Added Function void AssetImportService:RemoveTemplate(string name) {RobloxScriptSecurity}
Added Function void AssetImportService:SaveTemplate(string name, Dictionary importTemplate) {RobloxScriptSecurity}
Added Function Dictionary AvatarEditorService:GetOutfitDetails(int64 outfitId) [Yields]
Added Function Objects StyleBase:GetStyleRules()
Added Function void StyleBase:InsertStyleRule(StyleRule rule, int? index)
Added Function void StyleBase:SetStyleRules(Objects rules)
Added Function Dictionary StyleRule:GetProperties()
Added Function Dictionary StyleRule:GetPropertiesResolved() {RobloxScriptSecurity}
Added Function Variant StyleRule:GetProperty(string name)
Added Function Variant StyleRule:GetPropertyResolved(string name) {RobloxScriptSecurity}
Added Function void StyleRule:SetProperties(Dictionary table)
Added Function void StyleRule:SetProperty(string name, Variant value)
Added Function Objects StyleSheet:GetDerives()
Added Function void StyleSheet:SetDerives(Objects derives)
Added Function Array StylingService:GetAppliedStyles(Instance instance) {RobloxScriptSecurity}
Added Function Dictionary StylingService:GetStyleInfo(StyleRule style) {RobloxScriptSecurity}
Added Function Objects StylingService:GetStyleSheetDerivesChain(StyleSheet styleSheet) {RobloxScriptSecurity}
Added Function Dictionary StylingService:GetStyleSheetInfo(StyleSheet styleSheet) {RobloxScriptSecurity}
Added Function TextFilterResult TextFilterTranslatedResult:GetTranslationForLocale(string locale)

Added Enum AvatarChatServiceFeature
	Added EnumItem AvatarChatServiceFeature.None : 0
	Added EnumItem AvatarChatServiceFeature.UniverseAudio : 1
	Added EnumItem AvatarChatServiceFeature.UniverseVideo : 2
	Added EnumItem AvatarChatServiceFeature.PlaceAudio : 4
	Added EnumItem AvatarChatServiceFeature.PlaceVideo : 8
	Added EnumItem AvatarChatServiceFeature.UserAudioEligible : 16
	Added EnumItem AvatarChatServiceFeature.UserAudio : 32
	Added EnumItem AvatarChatServiceFeature.UserVideoEligible : 64
	Added EnumItem AvatarChatServiceFeature.UserVideo : 128

Added Enum ForceLimitMode
	Added EnumItem ForceLimitMode.Magnitude : 0
	Added EnumItem ForceLimitMode.PerAxis : 1

Added Enum SelectionRenderMode
	Added EnumItem SelectionRenderMode.Outlines : 0
	Added EnumItem SelectionRenderMode.BoundingBoxes : 1
	Added EnumItem SelectionRenderMode.Both : 2

Added EnumItem ConnectionError.DisconnectPrivateServerKickout : 286

Changed the category of Property GuiButton.Selected 
	from: "Data"
	  to: "Selection"

Removed Property Selection.ShowBoundingBox

Removed Tag [Deprecated] from Property Player.DevEnableMouseLock
Removed Tag [Deprecated] from Property StarterPlayer.EnableMouseLockOption
Removed Tag [Deprecated] from Property UserGameSettings.ControlMode
Removed Tag [NotReplicated] from Property Players.UseStrafingAnimations
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#578) for a syntax highlighted version!)