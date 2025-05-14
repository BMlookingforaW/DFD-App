import tensorflow as tf
from tensorflow.keras import layers, models

# Create a simple dummy model (MobileNetV2 + dense head)
def create_model():
    base = tf.keras.applications.MobileNetV2(
        input_shape=(224, 224, 3),
        include_top=False,
        weights=None  # Not loading ImageNet weights for full randomness
    )
    base.trainable = False

    x = layers.GlobalAveragePooling2D()(base.output)
    x = layers.Dense(64, activation='relu')(x)
    output = layers.Dense(1, activation='sigmoid')(x)

    model = models.Model(inputs=base.input, outputs=output)
    model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
    return model

# Generate and save model
model = create_model()
model.save("model/model.h5")

print("✅ Dummy model saved at model/model.h5")
