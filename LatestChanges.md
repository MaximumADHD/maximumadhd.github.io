## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/ffc8198ee7fa33063e174501552c01d9896220f1

## API Changes

```plain
Added Class DynamicTextureAlpha : Instance [NotCreatable] [NotReplicated]
Added Class ExperienceAuthService : Instance [NotCreatable] [Service]
Added Class VisibilityCheckDispatcher : Instance [NotCreatable] [Service]

Added Property CFrame BasePart.ExtentsCFrame [ReadOnly]
Added Property Vector3 BasePart.ExtentsSize [ReadOnly]
Added Property CFrame PVInstance.Pivot Offset [NotReplicated] [NotScriptable]
Added Property CFrame PVInstance.Origin [NotReplicated] [NotScriptable]
Added Property Enum.VRSessionState VRService.VRSessionState {RobloxScriptSecurity} [Hidden] [ReadOnly]

Added Function Tuple SoundService:GetInputDevice() {RobloxScriptSecurity}
Added Function Tuple SoundService:GetInputDevices() {RobloxScriptSecurity}
Added Function void SoundService:SetInputDevice(string name, string guid) {RobloxScriptSecurity}

Added Event AnimationTrack.Ended()

Added Enum ExperienceAuthScope
Added Enum ScopeCheckResult

Added Enum VRSessionState
	Added EnumItem VRSessionState.Idle : 0
	Added EnumItem VRSessionState.Visible : 1
	Added EnumItem VRSessionState.Focused : 2
	Added EnumItem VRSessionState.Undefined : 3

Added EnumItem ConnectionError.ReplicatorTimeout : 290

Added Tag [Hidden] to Property Bone.TransformedCFrame
Added Tag [NotReplicated] to Property RenderingTest.CFrame

Changed the category of Property Accoutrement.AttachmentForward 
	from: "Appearance"
	  to: "Transform"

Changed the category of Property Accoutrement.AttachmentPoint 
	from: "Appearance"
	  to: "Transform"

Changed the category of Property Accoutrement.AttachmentPos 
	from: "Appearance"
	  to: "Transform"

Changed the category of Property Accoutrement.AttachmentRight 
	from: "Appearance"
	  to: "Transform"

Changed the category of Property Accoutrement.AttachmentUp 
	from: "Appearance"
	  to: "Transform"

Changed the category of Property Attachment.WorldRotation 
	from: "Derived Data"
	  to: "Derived World Data"

Changed the category of Property Attachment.CFrame 
	from: "Data"
	  to: "Transform"

Changed the category of Property Attachment.Orientation 
	from: "Data"
	  to: "Transform"

Changed the category of Property Attachment.Position 
	from: "Data"
	  to: "Transform"

Changed the category of Property Attachment.Rotation 
	from: "Data"
	  to: "Transform"

Changed the category of Property BasePart.PivotOffset 
	from: "Transform"
	  to: "Pivot"

Changed the category of Property Bone.TransformedCFrame 
	from: "Data"
	  to: "Derived Data"

Changed the category of Property Bone.TransformedWorldCFrame 
	from: "Data"
	  to: "Derived World Data"

Changed the category of Property Bone.Transform 
	from: "Data"
	  to: "Transform"

Changed the category of Property Tool.Grip 
	from: "Appearance"
	  to: "Transform"

Changed the category of Property Tool.GripForward 
	from: "Appearance"
	  to: "Transform"

Changed the category of Property Tool.GripPos 
	from: "Appearance"
	  to: "Transform"

Changed the category of Property Tool.GripRight 
	from: "Appearance"
	  to: "Transform"

Changed the category of Property Tool.GripUp 
	from: "Appearance"
	  to: "Transform"

Changed the serialization of Property RenderingTest.CFrame 
	from: [<💾|📁> Saves|Loads]
	  to: [<📁> LoadOnly]

Changed the value-type of Property ExperienceInviteOptions.InviteMessageId from int to int64
Changed the value-type of Property ExperienceInviteOptions.InviteUser from int to int64

Changed the parameters of Function SocialService:PromptGameInvite 
	from: (Instance player)
	  to: (Instance player, Instance experienceInviteOptions = nil)

Changed the parameters of Event SocialService.PromptInviteRequested 
	from: (Instance player)
	  to: (Instance player, Instance experienceInviteOptions)

Changed the value of EnumItem ReservedHighlightId.Active 
	from: 128
	  to: 131072

Changed the value of EnumItem ReservedHighlightId.Hover from 64 to 262144
Changed the value of EnumItem ReservedHighlightId.Selection from 32 to 524288

Removed Function AvatarEditorService:GetRecommendedAssetsV2
Removed Function AvatarEditorService:GetRecommendedBundlesV2

Removed Event AnimationStreamTrack.Stopped

Removed Tag [Deprecated] from Function AvatarEditorService:GetRecommendedAssets
Removed Tag [Deprecated] from Function AvatarEditorService:GetRecommendedBundles
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#550) for a syntax highlighted version!)